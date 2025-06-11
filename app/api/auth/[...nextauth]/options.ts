import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcryptjs from "bcryptjs";
import dbClient from "@/prisma/DbClient";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials: any): Promise<any> {
        try {
          const user = await dbClient.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!user) {
            throw new Error("No user found");
          }

          const isPasswordValid = await bcryptjs.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) {
            throw new Error("Invalid password");
          }

          return user;
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          const googleUser = await dbClient.user.findUnique({
            where: {
              email: user.email,
            },
          });
          if (!googleUser) {
            await dbClient.user.create({
              data: {
                email: user.email!,
                name: user.name || "",
                profileImage:
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png",
                apiKey: "",
                freeTrials: 5,
              },
            });
          }
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.profileImage = user.profileImage;
        token.apiKey = user.apiKey;
        token.freeTrials = user.freeTrials;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.profileImage = token.profileImage;
        session.user.apiKey = token.apiKey;
        session.user.freeTrials = token.freeTrials;
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
    signOut: "/",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_AUTH_SECRET,
};

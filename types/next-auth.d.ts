import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    email: string;
    profileImage?: string | null;
  }

  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      profileImage?: string | null;
    } & DefaultSession["user"];
  }
}

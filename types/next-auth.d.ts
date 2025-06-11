import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    email: string;
    profileImage?: string;
    apiKey?: string;
    freeTrials?: number;
  }

  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      profileImage?: string;
      apiKey?: string;
      freeTrials?: number;
    } & DefaultSession["user"];
  }
}

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignIn from "@/components/Auth/SignIn";

const SignInPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center py-15 text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-900">
        <SignIn />
      </main>
      <Footer />
    </>
  );
};

export default SignInPage;

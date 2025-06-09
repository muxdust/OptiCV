import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Login from "@/components/Auth/Login";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center py-15">
        <Login />
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Register from "@/components/Auth/Register";

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center py-15">
        <Register />
      </main>
      <Footer />
    </>
  );
};

export default RegisterPage;

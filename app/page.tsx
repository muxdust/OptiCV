import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Faq from "@/components/Home/Faq";
import Banner from "@/components/Home/Banner";
import Footer from "@/components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center gap-20 pb-20">
        <Hero />
        <Features />
        <Faq />
        <Banner />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;

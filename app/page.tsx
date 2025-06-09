import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import StandOut from "@/components/Home/StandOut";
import Faq from "@/components/Home/Faq";
import Banner from "@/components/Home/Banner";
import Footer from "@/components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center gap-36 pb-20 text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-900">
        <Hero />
        <Features />
        <StandOut />
        <Faq />
        <Banner />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;

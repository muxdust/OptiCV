import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Editor from "@/components/Editor/Editor";

const EditorPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-start py-20 text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-900">
        <Editor />
      </main>
      <Footer />
    </>
  );
};

export default EditorPage;

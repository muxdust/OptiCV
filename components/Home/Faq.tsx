"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

import SwipeUpOnScroll from "@/utils/SwipeUpOnScroll";

const faqs = [
  {
    id: 1,
    question: "How do I upload my resume from Overleaf?",
    answer:
      "You can upload your resume by exporting it as a PDF from Overleaf and then dragging it into our upload interface. Support for direct Overleaf integration is also under development.",
  },
  {
    id: 2,
    question: "What does the AI optimization process involve?",
    answer:
      "The AI analyzes your resume's structure, keywords, and formatting. It then aligns your content with the provided job description and relevant fields to enhance relevance and visibility.",
  },
  {
    id: 3,
    question: "Can I preview my optimized resume before downloading?",
    answer:
      "Yes. A real-time preview is available so you can review and make adjustments before saving the final version.",
  },
  {
    id: 4,
    question: "Is my resume data stored or shared?",
    answer:
      "No. Your resume is processed temporarily during the session. It is neither stored nor shared. We prioritize full data privacy.",
  },
  {
    id: 5,
    question: "What formats can I download my optimized resume in?",
    answer:
      "You can export the optimized resume in PDF, LaTeX, or Word format, making it compatible with all major platforms.",
  },
  {
    id: 6,
    question: "Do I need an account to use OptiCV?",
    answer:
      "Yes. You need to sign in via a secure authentication system (powered by Google Auth) to manage your resume data and access optimization features.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="flex justify-center items-center w-full py-12">
      <div className="flex flex-col justify-center items-center w-full lg:container px-3 gap-2">
        <SwipeUpOnScroll>
          <h2 className="text-4xl font-semibold text-center text-neutral-800 dark:text-neutral-100">
            Frequently Asked Questions
          </h2>
          <p className="text-md font-normal text-center mb-6">
            Learn more about how OptiCV works and how it helps enhance your
            resume.
          </p>
        </SwipeUpOnScroll>
        <div className="w-full max-w-3xl">
          {faqs.map((faq) => (
            <SwipeUpOnScroll key={faq.id} className="w-full">
              <div className="border-b border-neutral-200 dark:border-neutral-700 py-4">
                <div className="w-full flex justify-between items-center text-left">
                  <div className="flex items-center gap-2">
                    <span className="inline-block">
                      <HelpCircle
                        size={20}
                        className="text-indigo-500 inline-block"
                      />
                    </span>
                    <span className="text-lg font-medium text-neutral-800 dark:text-neutral-100 inline-block">
                      {faq.question}
                    </span>
                  </div>
                  <button onClick={() => toggleFAQ(faq.id)}>
                    {openId === faq.id ? (
                      <ChevronUp className="text-neutral-600 dark:text-neutral-400 cursor-pointer" />
                    ) : (
                      <ChevronDown className="text-neutral-600 dark:text-neutral-400 cursor-pointer" />
                    )}
                  </button>
                </div>
                {openId === faq.id && (
                  <p className="mt-3 text-md ml-6">
                    {faq.answer}
                  </p>
                )}
              </div>
            </SwipeUpOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

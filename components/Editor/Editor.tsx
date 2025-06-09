"use client";
import React, { useState } from "react";
import { WandSparkles } from "lucide-react";
import {
  FileIcon,
  CopyIcon,
  DownloadIcon,
  UploadIcon,
  KeyIcon,
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";

const Editor = () => {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [loading, setLoading] = useState(false);

  const { mutateAsync: optimizeResume } = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/optimise", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resume,
          jobDescription,
          apiKey,
          isFirstTime,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to optimize the resume.");
      }
      return response;
    },
  });

  const handleOptimize = async () => {
    try {
      setLoading(true);
      const response = await optimizeResume();
      const reader = response.body?.getReader();
      if (!reader) throw new Error("Failed to read the response.");

      const decoder = new TextDecoder();
      let result = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });

        try {
          const parsed = JSON.parse(chunk);
          if (typeof parsed === "object" && parsed !== null) {
            const textContent = Object.values(parsed).join("");
            result += textContent;
          } else {
            result += chunk;
          }
        } catch {
          result += chunk;
        }
      }

      setResume(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-full lg:container px-3 gap-3">
        <h2 className="text-4xl font-semibold text-left text-neutral-800 dark:text-neutral-100">
          Optimize your{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Resume
          </span>
        </h2>
        <p className="text-md font-normal text-left">
          Optimize your resume and get it optimized for the job you want.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-start items-stretch w-full gap-10">
          <div className="flex flex-col justify-start items-start w-full gap-2">
            <h3 className="text-2xl font-semibold text-left text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
              <FileIcon size={26} className="text-indigo-500" />
              LaTeX Editor
            </h3>
            <div className="flex justify-between items-center gap-3 w-full mt-2">
              <button
                className="flex justify-center items-center gap-2 px-3 py-1.5 text-md font-normal rounded-md text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700/50 cursor-pointer w-full"
                onClick={() => {
                  navigator.clipboard.writeText(resume);
                }}
              >
                <CopyIcon size={20} className="text-indigo-500" />
                Copy
              </button>
              <button
                className="flex justify-center items-center gap-2 px-3 py-1.5 text-md font-normal rounded-md text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700/50 cursor-pointer w-full"
                onClick={() => {
                  const blob = new Blob([resume], { type: "text/plain" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = "optimized_resume.tex";
                  a.click();
                  URL.revokeObjectURL(url);
                }}
              >
                <DownloadIcon size={20} className="text-indigo-500" />
                Download
              </button>
              <button
                className="flex justify-center items-center gap-2 px-3 py-1.5 text-md font-normal rounded-md text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700/50 cursor-pointer w-full"
                onClick={() => {
                  // Upload file and parse content into resume state
                  const input = document.createElement("input");
                  input.type = "file";
                  input.accept = ".tex,.txt";
                  input.onchange = async () => {
                    if (input.files && input.files[0]) {
                      const text = await input.files[0].text();
                      setResume(text);
                    }
                  };
                  input.click();
                }}
              >
                <UploadIcon size={20} className="text-indigo-500" />
                Upload
              </button>
            </div>
            <div className="flex flex-col justify-start items-start w-full gap-2">
              <textarea
                placeholder="Paste your resume code here"
                cols={30}
                rows={25}
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                className="w-full border border-neutral-200 dark:border-neutral-700/50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-3">
            <div className="flex flex-col justify-start items-start w-full gap-3">
              <h3 className="text-2xl font-semibold text-left text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                <WandSparkles size={20} className="text-indigo-500" />
                Job Description
              </h3>
              <div className="flex items-center gap-2 w-full border-neutral-200 dark:border-neutral-700/50 p-2 rounded-md border focus-within:ring-2 focus-within:ring-indigo-500">
                <KeyIcon size={20} className="text-indigo-500" />
                <input
                  type="text"
                  placeholder="Your Groq API Key"
                  className="w-full border-none focus:outline-none"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              </div>
              <textarea
                placeholder="Enter your job description"
                cols={30}
                rows={10}
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="w-full border border-neutral-200 dark:border-neutral-700/50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              ></textarea>
            </div>
            <div className="flex justify-between items-center w-full gap-2">
              <button
                onClick={handleOptimize}
                disabled={loading}
                className="px-4 py-2 rounded-md text-white bg-indigo-500 dark:bg-indigo-500 cursor-pointer hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-colors duration-300 text-md font-normal flex justify-center items-center gap-2 w-full"
              >
                Optimize <WandSparkles size={20} />
              </button>
              <button className="px-4 py-2 rounded-md text-white bg-indigo-500 dark:bg-indigo-500 cursor-pointer hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-colors duration-300 text-md font-normal flex justify-center items-center gap-2 w-full">
                ATS Score <WandSparkles size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editor;

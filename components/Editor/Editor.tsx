"use client";
import React, { useEffect, useState } from "react";
import { WandSparkles } from "lucide-react";
import {
  FileIcon,
  CopyIcon,
  DownloadIcon,
  UploadIcon,
  KeyIcon,
  SparklesIcon,
  SaveIcon,
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import SwipeUpOnScroll from "@/utils/SwipeUpOnScroll";

const Editor = () => {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [loading, setLoading] = useState(false);
  const [warningText, setWarningText] = useState(
    "You got only one free optimize after that you need to save your api key to continue",
  );

  const { mutateAsync: optimizeResume } = useMutation({
    mutationFn: async () => {
      if (resume === "") {
        throw new Error("Resume is required.");
      }
      if (jobDescription === "") {
        throw new Error("Job description is required.");
      }
      if (apiKey === "" && !isFirstTime) {
        throw new Error("API key is required.");
      }

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
      setIsFirstTime(false);
      localStorage.setItem("firstTime", "false");
      toast.success("Resume optimized successfully.");
      return response;
    },
  });

  const handleOptimize = async () => {
    try {
      setLoading(true);
      const response = await optimizeResume();

      if (!response) return;

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
    } catch (error: any) {
      toast.error(error.message || "Failed to optimize the resume.");
    } finally {
      setLoading(false);
    }
  };

  const { mutateAsync: enhancePrompt } = useMutation({
    mutationFn: async () => {
      if (jobDescription === "") {
        throw new Error("Job description is required.");
      }

      const response = await fetch("/api/prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobDescription,
          apiKey,
          isFirstTime,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate prompt.");
      }
      toast.success("Prompt generated successfully.");
      return response;
    },
  });

  const handleEnhancePrompt = async () => {
    try {
      setLoading(true);
      const response = await enhancePrompt();

      if (!response) return;

      const reader = response.body?.getReader();
      if (!reader) throw new Error("Failed to read the response.");

      const decoder = new TextDecoder();
      let result = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.trim().split("\n");

        for (const line of lines) {
          try {
            const parsed = JSON.parse(line);
            if (parsed.prompt) {
              result += parsed.prompt;
            }
          } catch {
            console.warn("Failed to parse stream chunk:", line);
          }
        }
      }

      setJobDescription(result);
    } catch (error: any) {
      toast.error(error.message || "Failed to generate prompt.");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveApiKey = () => {
    if (apiKey === "") {
      toast.error("API Key is required.");
      return;
    }
    localStorage.setItem("apiKey", apiKey);
    setIsFirstTime(false);
    localStorage.setItem("firstTime", "false");
    toast.success("API Key saved successfully.");
  };

  useEffect(() => {
    const firstTime = localStorage.getItem("firstTime");
    if (firstTime === "false") {
      setIsFirstTime(false);
    }
    const apiKey = localStorage.getItem("apiKey");
    if (apiKey) {
      setApiKey(apiKey);
      setWarningText("");
    }
  }, []);

  const copyToClipboard = () => {
    if (resume === "") {
      toast.error("Resume is empty.");
      return;
    }
    navigator.clipboard
      .writeText(resume)
      .then(() => {
        toast.success("Resume copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        toast.error("Failed to copy resume.");
      });
  };

  const downloadResume = () => {
    if (resume === "") {
      toast.error("Resume is empty.");
      return;
    }
    const blob = new Blob([resume], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "optimized_resume.tex";
    a.click();
    URL.revokeObjectURL(url);
  };

  const uploadResume = () => {
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
  };

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-full lg:container px-3 gap-3">
        <SwipeUpOnScroll className="w-full">
          <h2 className="text-4xl font-semibold text-left text-neutral-800 dark:text-neutral-100">
            Optimize your{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-md font-normal text-left">
            Optimize your resume and get it optimized for the job you want.
          </p>
        </SwipeUpOnScroll>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-start items-stretch w-full gap-10">
          <SwipeUpOnScroll className="w-full">
            <div className="flex flex-col justify-start items-start w-full gap-3">
              <h3 className="text-2xl font-semibold text-left text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                <FileIcon size={26} className="text-indigo-500" />
                LaTeX Editor
              </h3>
              <div className="flex justify-between items-center gap-3 w-full mt-2">
                <button
                  className="flex justify-center items-center gap-2 px-3 py-1.5 text-md font-normal rounded-md text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700/50 cursor-pointer w-full"
                  onClick={() => {
                    copyToClipboard();
                  }}
                >
                  <CopyIcon size={20} className="text-indigo-500" />
                  Copy
                </button>
                <button
                  className="flex justify-center items-center gap-2 px-3 py-1.5 text-md font-normal rounded-md text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700/50 cursor-pointer w-full"
                  onClick={() => {
                    downloadResume();
                  }}
                >
                  <DownloadIcon size={20} className="text-indigo-500" />
                  Download
                </button>
                <button
                  className="flex justify-center items-center gap-2 px-3 py-1.5 text-md font-normal rounded-md text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700/50 cursor-pointer w-full"
                  onClick={() => {
                    uploadResume();
                  }}
                >
                  <UploadIcon size={20} className="text-indigo-500" />
                  Upload
                </button>
              </div>
              <div className="flex flex-col justify-start items-start w-full">
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
          </SwipeUpOnScroll>
          <SwipeUpOnScroll className="w-full">
            <div className="flex flex-col justify-start items-start w-full gap-3">
              <div className="flex flex-col justify-start items-start w-full gap-3">
                <h3 className="text-2xl font-semibold text-left text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                  <WandSparkles size={20} className="text-indigo-500" />
                  Job Description
                </h3>
                <p className="text-xs text-red-500 font-normal text-left">
                  {warningText}
                </p>
                <div className="flex justify-start items-start w-full gap-3">
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
                  <button
                    onClick={handleSaveApiKey}
                    className="px-4 py-2 rounded-md text-white bg-indigo-500 dark:bg-indigo-500 cursor-pointer hover:bg-indigo-600 dark:hover:bg-indigo-600 text-md font-normal w-fit flex justify-center items-center gap-2"
                  >
                    Save <SaveIcon size={20} />
                  </button>
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
                  className="px-4 py-2 rounded-md text-white bg-indigo-500 dark:bg-indigo-500 cursor-pointer hover:bg-indigo-600 dark:hover:bg-indigo-600 text-md font-normal flex justify-center items-center gap-2 w-full"
                >
                  Optimize <WandSparkles size={20} />
                </button>
                <button
                  onClick={handleEnhancePrompt}
                  disabled={loading}
                  className="px-4 py-2 rounded-md text-white dark:text-neutral-800 bg-neutral-800 dark:bg-white cursor-pointer hover:bg-neutral-900 dark:hover:bg-neutral-100 text-md font-normal flex justify-center items-center gap-2 w-full"
                >
                  Enhance Prompt <SparklesIcon size={20} />
                </button>
              </div>
            </div>
          </SwipeUpOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Editor;

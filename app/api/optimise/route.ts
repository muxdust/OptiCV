import { NextRequest, NextResponse } from "next/server";
import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  try {
    const { resume, jobDescription, apiKey, isFirstTime } = await req.json();

    const effectiveApiKey = isFirstTime ? process.env.GROQ_API_KEY : apiKey;

    if (!effectiveApiKey) {
      return NextResponse.json(
        { error: "API key is required." },
        { status: 400 }
      );
    }

    const groq = createOpenAI({
      baseURL: "https://api.groq.com/openai/v1",
      apiKey: effectiveApiKey,
    });

    const result = await streamText({
      model: groq("llama3-70b-8192"),
      system: `
      You are an expert resume rewriting assistant specialized in job-specific optimization.
      
      Instructions:
      - Enhance the resume using keywords and skills from the job description.
      - Retain all relevant project experience, programming languages, tools, and achievements from the original resume.
      - Never remove skills, social profiles, or project entries unless they are clearly irrelevant or redundant.
      - Expand on existing content only when appropriate to match the job description.
      - Preserve the formatting as valid, clean LaTeX.
      
      Only output LaTeX. No explanations or comments.
      `,
      messages: [
        {
          role: "user",
          content: `Resume:\n${resume}\n\nJob Description:\n${jobDescription}`,
        },
      ],
    });

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.textStream) {
            const encodedChunk = new TextEncoder().encode(chunk);
            controller.enqueue(encodedChunk);
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to optimize the resume." },
      { status: 500 }
    );
  }
}

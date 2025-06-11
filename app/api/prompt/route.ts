import { NextRequest, NextResponse } from "next/server";
import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  try {
    const { jobDescription, apiKey, isFirstTime } = await req.json();

    const effectiveApiKey = isFirstTime ? process.env.GROQ_API_KEY : apiKey;

    if (!effectiveApiKey) {
      return NextResponse.json(
        { error: "API key is required." },
        { status: 400 },
      );
    }

    const groq = createOpenAI({
      baseURL: "https://api.groq.com/openai/v1",
      apiKey: effectiveApiKey,
    });

    const { textStream } = await streamText({
      model: groq("llama3-70b-8192"),
      system: `
        You are an expert prompt generator for resume optimization.

        Instructions:
        - Generate a prompt for the given job description in short and concise manner.
        - The prompt should be optimized for resume optimization for the job role the user is applying for.
        - The prompt should be easy to understand and follow.
        - Do not include any other information in the prompt like "here is the prompt" or "here is the job description".
      `,
      messages: [
        {
          role: "user",
          content: `Job Description:\n${jobDescription}`,
        },
      ],
    });

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of textStream) {
            controller.enqueue(
              encoder.encode(JSON.stringify({ prompt: chunk }) + "\n"),
            );
          }
        } catch (streamError) {
          console.error("Streaming error:", streamError);
          controller.enqueue(
            encoder.encode(
              JSON.stringify({ error: "Streaming error occurred." }),
            ),
          );
        } finally {
          controller.close();
        }
      },
    });

    return new NextResponse(stream, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Prompt generation failed:", error);
    return NextResponse.json(
      { error: "Failed to generate prompt." },
      { status: 500 },
    );
  }
}

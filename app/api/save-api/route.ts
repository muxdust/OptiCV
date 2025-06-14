import { NextRequest, NextResponse } from "next/server";
import dbClient from "@/prisma/DbClient";

export async function POST(request: NextRequest) {
  const { apiKey, email } = await request.json();

  try {
    const user = await dbClient.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const updatedUser = await dbClient.user.update({
      where: {
        email: email,
      },
      data: {
        apiKey: apiKey,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to save API key" },
      { status: 500 },
    );
  }
}

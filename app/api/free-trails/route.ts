import { NextRequest, NextResponse } from "next/server";
import dbClient from "@/prisma/DbClient";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  try {
    const user = await dbClient.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (!user.freeTrials || user.freeTrials <= 0) {
      return NextResponse.json(
        { error: "No free trials remaining" },
        { status: 403 },
      );
    }

    const updatedUser = await dbClient.user.update({
      where: { email },
      data: {
        freeTrials: user.freeTrials - 1,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to update free trials" },
      { status: 500 },
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import DbClient from "@/prisma/DbClient";
import bcryptjs from "bcryptjs";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, username, email, password } = body;

  if (!name || !username || !email || !password) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  try {
    const user = await DbClient.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = await DbClient.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
      },
    });

    if (!newUser) {
      return NextResponse.json(
        { error: "Failed to register user" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to register user" },
      { status: 500 },
    );
  }
}

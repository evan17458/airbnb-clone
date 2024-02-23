import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
//拿到PrismaClient
//Prisma Client: 自動生成的資料庫CRUD介面。
export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("建立帳號出錯:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
//2:07:13

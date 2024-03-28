import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json(
      { message: "logout successfully" },
      { status: 200 }
    );
    response.cookies.set("token", "", {
      httpOnly: true,
      sameSite: true,
      secure: true,
      expires: new Date(0),
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 505 });
  }
}

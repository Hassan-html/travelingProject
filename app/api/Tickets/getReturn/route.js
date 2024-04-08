import { NextResponse } from "next/server";
import { executeQuery } from "../../connections/sqlConnection";

export const POST = async (req) => {
  const body = await req.json();
  try {
    const ReturnData = await executeQuery("SELECT * FROM ReturnTicket", []);

    return NextResponse.json(
      {
        message: ReturnData,
      },
      { status: 200 }
    );
  } catch (error) {
    NextResponse.json({ message: "Server error please try refreshing page" });
  }
};

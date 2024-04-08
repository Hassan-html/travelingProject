import { NextResponse } from "next/server";
import { executeQuery } from "../../connections/sqlConnection";

export const GET = async () => {
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

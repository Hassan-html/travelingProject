import { NextResponse } from "next/server";
import { executeQuery } from "../../connections/sqlConnection";

export const POST = async (req) => {
  const body = await req.json();
  try {
    const oneWayData = await executeQuery("SELECT * FROM OneWayTicket", []);

    return NextResponse.json(
      {
        message: oneWayData,
      },
      { status: 200 }
    );
  } catch (error) {
    NextResponse.json({ message: "Server error please try refreshing page" });
  }
};

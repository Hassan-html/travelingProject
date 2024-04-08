import { NextResponse } from "next/server";
import { executeQuery } from "../../connections/sqlConnection";

export const GET = async () => {
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

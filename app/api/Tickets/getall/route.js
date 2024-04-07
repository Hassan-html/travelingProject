import { NextResponse } from "next/server";
import { executeQuery } from "../../connections/sqlConnection";

export const GET = async () => {
  try {
    const oneWayData = await executeQuery("SELECT * FROM OneWayTicket", []);
    const ReturnTicket = await executeQuery("SELECT * FROM ReturnTicket");
    return NextResponse.json({
      message: { oneWay: oneWayData, returnTicket: ReturnTicket },
    });
  } catch (error) {
    NextResponse.json({ message: "Server error please try refreshing page" });
  }
};

import { NextResponse } from "next/server";
import oneWayTicketModel from "../../models/oneWayTicketModel";
export const GET = async () => {
  try {
    const oneWayData = await oneWayTicketModel.find({});
    console.log(oneWayData);
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

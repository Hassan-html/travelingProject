import { connect } from "@/app/api/dbconfig/mongoseConfig";
import { NextResponse } from "next/server";
import User from "../models/userModel";
connect();
export const POST = async (req: any) => {
  const body = await req.json();
  try {
    const user = await User.findOne({ _id: body.userId });
    return NextResponse.json(
      {
        message: "Working",
        data: { name: user.username, email: user.email, Admin: user.isAdmin },
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "error finding credentials please logout an dlogin again" },
      { status: 500 }
    );
  }
};

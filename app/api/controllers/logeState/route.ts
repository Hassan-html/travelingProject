import { extractingData } from "../../helpers/extractingToken";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../dbconfig/mongoseConfig";
import User from "../../models/userModel";
connect();
export async function GET(request: NextRequest) {
  const token = request.cookies.get("token")?.value || "";
  try {
    const userId = (await extractingData(request, token)) || "";
    if (userId === "NotFound") {
      return NextResponse.json(
        { message: userId, logedIn: false },
        { status: 200 }
      );
    }
    // deleting cookie if someone mess with it
    else {
      return NextResponse.json(
        { message: userId, logedIn: true },
        { status: 200 }
      );
    }
  } catch (error: any) {
    console.log("its on error");
    return NextResponse.json(
      { message: false, logedIn: false },
      { status: 200 }
    );
  }
}

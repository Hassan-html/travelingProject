import { extractingData } from "../../helpers/extractingToken";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../dbconfig/mongoseConfig";
connect();
export async function GET(request: NextRequest) {
  try {
    const userId = (await extractingData(request)) || "";
    if (userId) {
      return NextResponse.json(
        { message: userId, logedIn: true },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "", logedIn: false },
        { status: 200 }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { message: false, logedIn: error },
      { status: 200 }
    );
  }
}

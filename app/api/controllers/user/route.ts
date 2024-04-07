import { extractingData } from "../../helpers/extractingToken";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../dbconfig/mongoseConfig";
connect();
export async function GET(request: NextRequest) {
  const token = request.cookies.get("token")?.value || "";
  try {
    const userId = (await extractingData(request, token)) || "";
    if (userId !== "NotFound" && userId) {
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
    console.log("its on error");
    return NextResponse.json(
      { message: false, logedIn: false },
      { status: 200 }
    );
  }
}

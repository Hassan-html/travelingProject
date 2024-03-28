import { extractingData } from "../../helpers/extractingToken";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../dbconfig/mongoseConfig";
connect();
export async function GET(request: NextRequest) {
  try {
    const userId = await extractingData(request);
    return NextResponse.json({ message: userId }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

import { NextResponse } from "next/server";
import { executeQuery } from "../../connections/sqlConnection";

export const POST = async (req) => {
  const body = await req.json();

  try {
    if (body.type === "return") {
      const deletItemReturn = await executeQuery(
        "DELETE FROM ReturnTicket  WHERE id=?",
        [body.id]
      );
      return NextResponse.json({ message: "Deleted Return" }, { status: 200 });
    } else {
      const deletItem = await executeQuery(
        "DELETE FROM OneWayTicket  WHERE id=?",
        [body.id]
      );
    }

    return NextResponse.json({ message: "Deleted One Way" }, { status: 200 });
  } catch (error) {
    console.log(error);
  }

  return;
};

import { NextResponse } from "next/server";
import { executeQuery } from "../../connections/sqlConnection";

export const POST = async (req) => {
  const body = await req.json();
  try {
    const deletItem = await executeQuery(
      "DELETE FROM OneWayTicket  WHERE id=?",
      [body.id]
    );
    const deletItemReturn = await executeQuery(
      "DELETE FROM ReturnTicket  WHERE id=?",
      [body.id]
    );
    console.log(deletItem, deletItemReturn, body);
    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
  }

  return;
};

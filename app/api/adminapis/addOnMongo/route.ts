import { connect } from "@/app/api/dbconfig/mongoseConfig.js";
import { NextResponse } from "next/server";
import OneWay from "../../models/oneWayTicketModel";
connect();
export const POST = async (req) => {
  const body = await req.json();
  const { oneWay, returnTicket, price } = body;

  try {
    const onewayticket = new OneWay({
      Airline: oneWay.airLine,
      FlightNo: oneWay.flightNo,
      Sector: oneWay.Sector,
      DepartureDate: oneWay.DepartureDate,
      DepartureTime: oneWay.DepartureTime,
      ArrivalTime: oneWay.ArrivalTime,
      Baggage: oneWay.Baggage,
      Meal: oneWay.Meal,
      Price: price,
      Booked: false,
    });
    const savedOneWay = await onewayticket.save();
    console.log("added in mongo");
    return NextResponse.json({ message: "Ticket Added M" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error in serve: " + error },
      { status: 505 }
    );
  }
};

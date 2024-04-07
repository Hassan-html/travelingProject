import { NextResponse } from "next/server";
import { executeQuery } from "../../connections/sqlConnection";
export const POST = async (req) => {
  const body = await req.json();

  // inserting for one way ticket
  const { oneWay, returnTicket, price } = body;

  // adding one way
  const AddedOneWayTicket = await executeQuery(
    "INSERT INTO OneWayTicket (id,Airline,FlightNo,Sector,DepartureDate,DepartureTime,ArrivalTime,Baggage,Meal,Booked,entery,price) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      null,
      oneWay.airLine,
      oneWay.flightNo,
      oneWay.Sector,
      oneWay.DepartureDate,
      oneWay.DepartureTime,
      oneWay.ArrivalTime,
      oneWay.Baggage,
      oneWay.Meal,
      false,
      null,
      price,
    ]
  );
  console.log(returnTicket);

  // adding Return point
  if (returnTicket.TicketType !== "") {
    const gettingIdFromOneWay = await executeQuery(
      "SELECT MAX(id) FROM OneWayTicket"
    );
    const latestOneWay = gettingIdFromOneWay[0]["MAX(id)"];
    const AddedReturnTicket = await executeQuery(
      "INSERT INTO ReturnTicket (id,Airline,FlightNo,Sector,DepartureDate,DepartureTime,ArrivalTime,Baggage,Meal,Booked,entery,price) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        latestOneWay,
        returnTicket.airLine,
        returnTicket.flightNo,
        returnTicket.Sector,
        returnTicket.DepartureDate,
        returnTicket.DepartureTime,
        returnTicket.ArrivalTime,
        returnTicket.Baggage,
        returnTicket.Meal,
        false,
        null,
        price,
      ]
    );
    console.log(AddedReturnTicket);
  }

  console.log(AddedOneWayTicket);
  console.log(body);

  return NextResponse.json({ message: "Ticket Added" }, { status: 200 });
};

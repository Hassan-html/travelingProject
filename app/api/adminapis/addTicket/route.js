import { NextResponse } from "next/server";
import { executeQuery } from "../../connections/sqlConnection";
export const POST = async (req) => {
  const body = await req.json();

  // inserting for one way ticket
  const { oneWay, returnTicket, price } = body;

  // adding Return
  if (
    returnTicket.airLine !== "" &&
    returnTicket.flightNo !== "" &&
    returnTicket.DepartureDate !== "" &&
    returnTicket.DepartureTime !== "" &&
    returnTicket.ArrivalTime !== "" &&
    returnTicket.Baggage !== ""
  ) {
    const AddedReturnTicket = await executeQuery(
      "INSERT INTO ReturnTicket (Airline,FlightNo,Sector,DepartureDate,DepartureTime,ArrivalTime,Baggage,Meal,Booked,entery,price,rAirline,rFlightNo,rSector,rDepartureDate,rArrivalTime,rBaggage,rMeal,id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
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
        returnTicket.airLine,
        returnTicket.flightNo,
        returnTicket.Sector,
        returnTicket.DepartureDate,
        returnTicket.DepartureTime,
        returnTicket.ArrivalTime,
        returnTicket.Baggage,
        returnTicket.Meal,
        null,
      ]
    );
    console.log(AddedReturnTicket);
    return NextResponse.json(
      { message: "Return Ticket Added" },
      { status: 200 }
    );
  } else {
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
    console.log(AddedOneWayTicket);
    return NextResponse.json({ message: "Ticket Added" }, { status: 200 });
  }

  return NextResponse.json({ message: "some Error" }, { status: 200 });
};

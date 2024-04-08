import mongoose from "mongoose";

const oneWaySchema = new mongoose.Schema({
  Airline: { type: String, required: [true, "Please Provide AirLine"] },
  FlightNo: {
    type: String,
    required: [true, "Please Provide FlightNo"],
  },
  Sector: {
    type: String,
    required: true,
  },
  DepartureDate: {
    type: Date,
    default: false,
  },
  DepartureTime: {
    type: String,
    default: false,
  },
  ArrivalTime: {
    type: String,
    default: false,
  },
  Baggage: String,
  Meal: String,
  Price: String,
  Booked: { type: Boolean, default: false },
});

const OneWay =
  mongoose.models.oneWayTicket || mongoose.model("oneWayTicket", oneWaySchema);

export default OneWay;

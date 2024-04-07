"use client";
import HeadTitle from "@/app/components/admincomponents/HeadTitle/HeadTitle";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPlaneArrival, FaPlaneDeparture, FaPlus } from "react-icons/fa6";
import "./style.css";
import axios from "axios";
import toast from "react-hot-toast";
import SpinnerPage from "@/app/components/Publiccomponents/spinnerPage/spinner";
import Dashboard from "@/app/components/admincomponents/navigation/Dashboard";

// some helpers

const page = () => {
  const [oneway, setOneWay] = useState(false);
  const [returnTicket, setReturnTicket] = useState();
  const [MultiTickets, setMultiTickets] = useState();
  const [SingleTickets, setSingleTickets] = useState();
  const [loading, setLoading] = useState(true);
  const [AirLine, setAirLine] = useState();

  // Delete function
  const ticketDelete = (e) => {
    axios
      .post(`/api/Tickets/delete`, JSON.stringify({ id: e.target.value }))
      .then((res) => {
        console.log(res.data.message);
        toast.success("Ticket Deleted Successfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ticket Deleted Successfully");
      });
  };

  useEffect(() => {
    axios
      .get("/api/Tickets/getall")
      .then((res) => {
        setOneWay(res.data.message.oneWay);
        setReturnTicket(res.data.message.returnTicket);
        console.log("something fetch");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    if (oneway) {
      let values = oneway.map((item) => {
        return item.Airline;
      });
      values = new Set(values);
      values = [...values];
      setAirLine(values);
      const Matched = oneway
        .map((element1) => {
          const matchingElement = returnTicket.find(
            (element2) => element2.id === element1.id
          );

          if (matchingElement) {
            return {
              oneway: element1,
              returnTicket: matchingElement,
            };
          } else {
            return null;
          }
        })
        .filter((element) => element !== null);
      const UnMatched = oneway
        .map((element1) => {
          const matchingElement = returnTicket.find(
            (element2) => element2.id === element1.id
          );

          if (matchingElement) {
            return null;
          } else {
            return element1;
          }
        })
        .filter((element) => element !== null);
      setMultiTickets(Matched);
      setSingleTickets(UnMatched);
      setLoading(false);
    }
  }, [oneway, returnTicket]);

  if (loading) {
    return <SpinnerPage />;
  } else {
    return (
      <>
        {/* main */}
        <Dashboard />

        <main className="grid grid-cols-[90px,1fr]">
          {/* for just nav space */}
          <nav></nav>
          <section className="grid grid-rows-[60px,1fr]  h-screen">
            {/* page title */}
            <section className="relative">
              {/* headtitle */}
              <HeadTitle title="Tickets" />
              {/* add Button */}
              <Link
                href="/adminPages/Add/addTickets"
                className="fixed flex h-[60px] w-[60px] rounded-full z-[5000] justify-center items-center bottom-[20px] right-[20px] bg-Dark text-white text-[30px]"
              >
                <FaPlus />
              </Link>
              {/* filteration Bar */}
              <section className=" p-4 flex justify-between items-center">
                <div className="buttons flex gap-4">
                  <select className="bg-secondary text-white p-2 rounded-lg text-sm">
                    <option value="">Select AirLine</option>
                    <option value="">Select AirLine</option>
                  </select>
                  <select className="bg-secondary text-white p-2 rounded-lg text-sm">
                    <option value="">Select Sector</option>
                    <option value="">Select AirLine</option>
                  </select>
                </div>
              </section>
              <table className="w-full h-[70%]  min-w-[1800px] overflow-auto">
                <thead>
                  <tr className="bg-Dark p-2 text-white ">
                    <th>AirLine</th>
                    <th>FlightNo</th>
                    <th>Sector</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Baggage</th>
                    <th>Meal</th>
                    <th>Booked</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="h-[80%] w-full gap-[10px] overflow-auto ">
                  {AirLine.map((item) => {
                    return (
                      <>
                        <tr className="h-[40px] text-center">
                          <td colSpan="11">
                            <span className="bg-Dark text-white p-2 px-4 rounded-lg">
                              {item}
                            </span>
                          </td>
                        </tr>

                        {SingleTickets &&
                          SingleTickets.map((element) => {
                            if (element.Airline === item) {
                              return (
                                <>
                                  <tr className="py-[10px] text-sm md:text-[17px]">
                                    <td className="flex justify-center items-center gap-2 relative">
                                      <FaPlaneDeparture className="absolute left-[5px]" />{" "}
                                      {element.Airline}
                                    </td>
                                    <td>{element.FlightNo}</td>
                                    <td>{element.Sector}</td>
                                    <td>
                                      {element.DepartureDate.split("T")[0]}
                                    </td>
                                    <td>
                                      {element.DepartureTime.slice(0, -3)}-
                                      {element.ArrivalTime.slice(0, -3)}
                                    </td>
                                    <td>{element.Baggage}</td>
                                    <td>{element.Meal}</td>
                                    <td>{element.Booked ? "Yes" : "No"}</td>
                                    <td>{element.price}</td>
                                    <td className="button">
                                      <button
                                        className="bg-red-600 rounded-lg text-white p-2 px-4 "
                                        value={element.id}
                                        onClick={ticketDelete}
                                      >
                                        Del
                                      </button>
                                      <button className="bg-special rounded-lg text-white p-2 px-4">
                                        Edit
                                      </button>
                                    </td>
                                  </tr>
                                </>
                              );
                            }
                          })}
                      </>
                    );
                  })}
                  {!AirLine
                    ? "No Tickets Found"
                    : AirLine.map((item) => {
                        return (
                          <>
                            <>
                              <tr className="h-[40px] text-center">
                                <td colspan="11">
                                  <span className="bg-Dark text-white p-2 px-4 rounded-lg">
                                    {item}
                                  </span>
                                </td>
                              </tr>
                            </>

                            {MultiTickets.map((element) => {
                              const { oneway, returnTicket } = element;
                              if (oneway.Airline === item) {
                                return (
                                  <>
                                    <tr className="py-[10px] text-sm md:text-[17px]">
                                      <td className="flex justify-center items-center gap-2 relative">
                                        <FaPlaneDeparture className="absolute left-[5px]" />{" "}
                                        {oneway.Airline}
                                      </td>
                                      <td>{oneway.FlightNo}</td>
                                      <td>{oneway.Sector}</td>
                                      <td>
                                        {oneway.DepartureDate.split("T")[0]}
                                      </td>
                                      <td>
                                        {oneway.DepartureTime.slice(0, -3)}-
                                        {oneway.ArrivalTime.slice(0, -3)}
                                      </td>
                                      <td>{oneway.Baggage}</td>
                                      <td>{oneway.Meal}</td>
                                      <td>{oneway.Booked}</td>
                                      <td rowSpan="2">{oneway.price}</td>
                                      <td rowSpan="2" className="button">
                                        <button
                                          className="bg-red-600 rounded-lg text-white p-2 px-4"
                                          onClick={ticketDelete}
                                          value={oneway.id}
                                        >
                                          Del
                                        </button>
                                        <button className="bg-special rounded-lg text-white p-2 px-4">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                    <tr className="py-[10px] text-sm md:text-[17px] bg-gray-200">
                                      <td className="flex justify-center items-center gap-2 relative">
                                        <FaPlaneArrival className="absolute left-[5px]" />{" "}
                                        {returnTicket.Airline}
                                      </td>
                                      <td>{returnTicket.FlightNo}</td>
                                      <td>{returnTicket.Sector}</td>
                                      <td>
                                        {
                                          returnTicket.DepartureDate.split(
                                            "T"
                                          )[0]
                                        }
                                      </td>
                                      <td>
                                        {returnTicket.DepartureTime.slice(
                                          0,
                                          -3
                                        )}
                                        -{returnTicket.ArrivalTime.slice(0, -3)}
                                      </td>
                                      <td>{returnTicket.Baggage}</td>
                                      <td>{returnTicket.Meal}</td>
                                      <td>{returnTicket.Booked}</td>
                                    </tr>
                                  </>
                                );
                              }
                            })}
                          </>
                        );
                      })}
                </tbody>
              </table>
            </section>
          </section>
        </main>
      </>
    );
  }
};

export default page;

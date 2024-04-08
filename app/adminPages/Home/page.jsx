"use client";
import React, { useState } from "react";
import "./style.css";
import Link from "next/link";
import ONE from "@/app/components/Tickets/oneWay/ONE";
import RTicket from "@/app/components/Tickets/Return/RTicket";
import {
  FaPlaneArrival,
  FaPlaneDeparture,
  FaSearchengin,
} from "react-icons/fa6";
import { HiSearch } from "react-icons/hi";
const pages = () => {
  const [filterNav, setFilterNav] = useState(false);
  return (
    <>
      <section>
        <div className="Title bg-Dark bg-opacity-10 shadow-xl p-4 min-h-30px flex flex-col justify-center items-center"></div>
        <h1 className="text-primary text-center text-[40px] p-6">Bookings</h1>
        <div className="buttons">
          <button
            className="bg-Dark text-white m-2 "
            onClick={() => {
              setFilterNav(!filterNav);
            }}
          >
            Advance Search
          </button>
          <Link href="/adminPages/Tickets">
            <button
              className="bg-special text-white m-2 "
              onClick={() => {
                setFilterNav(false);
              }}
            >
              Add Bookings
            </button>
          </Link>
        </div>
        <section className="tickets flex overflow-auto w-full p-2 py-7">
          {/* filter Nav */}

          <section
            className={`${!filterNav && "close"} filterNav h-full w-[400px]`}
          >
            <div className="searchBox pb-[80px]">
              <div className="box flex">
                <input
                  type="text"
                  placeholder="Search By key word"
                  className="w-full h-10 p-2 border-2 border-Dark border-opacity-25"
                />
                <button className="text-[20px] bg-Dark text-white">
                  <HiSearch />
                </button>
              </div>
            </div>
            <h1 className="text-[25px]">Flight</h1>
            <div className="selects flex gap-3">
              <select name="" id="">
                <option value="">Airlies</option>
              </select>
              <select name="" id="">
                <option value="">Sectors</option>
              </select>
            </div>
            <div className="Date flex-col flex gap-[20px]">
              <h1 className="text-[25px]">Departure Date</h1>
              <input type="date" />
            </div>
            <div className="Date flex-col flex gap-[20px]">
              <h1 className="text-[25px]">Additionals</h1>
              <div className="input-group flex justify-normal items-center gap-4">
                <input type="checkbox" id="Meal" />
                <label htmlFor="Meal">Meal</label>
              </div>
            </div>
          </section>
          <table className="text-sm w-full ">
            <thead>
              <tr>
                <td>AirLine</td>
                <td>FlighNo</td>
                <td>Sector</td>
                <td>Date</td>
                <td>Time</td>
                <td>Baggage</td>
                <td>Meal</td>
                <td>Booked</td>
                <td>Price</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {/* one way ticket */}

              <ONE />

              {/* Return Tickets */}
              <RTicket />
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
};

export default pages;

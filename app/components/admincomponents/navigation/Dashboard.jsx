"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowUp,
  FaBars,
  FaComputer,
  FaPerson,
  FaUser,
} from "react-icons/fa6";
import { RiShutDownLine } from "react-icons/ri";
import { motion } from "framer-motion";
import axios from "axios";
const Dashboard = (prop) => {
  const { user } = prop;

  const [nav, setNav] = useState(false);
  const [userAccount, setUserAccount] = useState(false);
  const [drop, setDrop] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const navigate = useRouter();
  const logout = () => {
    axios
      .get("/api/controllers/logout")
      .then((res) => {
        console.log(res.data);
        window.location.reload();

        navigate.push("/pages/auth/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(user);
    if (!userAccount) {
      axios
        .post("/api/user", JSON.stringify(user))
        .then((res) => {
          setUserAccount(res.data.data);
          console.log(res);
          console.log(userAccount);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  return (
    <>
      <nav className="bg-white p-[15px] lg:flex lg:justify-between relative lg:items-center lg:h-auto grid ">
        <div className="bar flex justify-between items-center">
          <h1 className="flex justify-center items-center gap-2">
            <span className="relative w-[30px] h-[30px]">
              <Image src="/logo.svg" fill objectFit="cover" alt="logo" />
            </span>
            Travel Wavezs
          </h1>
          <button
            className="bars lg:hidden text-[25px]"
            onClick={() => {
              setNav(!nav);
            }}
          >
            <FaBars />
          </button>
        </div>

        {!userAccount.Admin && (
          <ul
            className={`links h-full lg:flex flex-col lg:flex-row gap-4 lg:items-center text-[17px] text-secondary mt-3 lg:mt-0  ${
              !nav && "hidden"
            }`}
          >
            <li className="hover:bg-Dark hover:text-white p-4 lg:rounded-lg">
              <Link
                href="/"
                onClick={() => {
                  setNav(false);
                }}
              >
                Bookings
              </Link>
            </li>
            <li className="hover:bg-Dark hover:text-white p-4 lg:rounded-lg">
              <Link
                href="/pages/Packages"
                onClick={() => {
                  setNav(false);
                }}
              >
                Pending
              </Link>
            </li>
            <li className="hover:bg-Dark hover:text-white p-4 lg:rounded-lg">
              <Link
                href="/pages/About"
                onClick={() => {
                  setNav(false);
                }}
              >
                Booked
              </Link>
            </li>
            <li className="hover:bg-Dark hover:text-white p-4 lg:rounded-lg">
              <Link
                href="/pages/Contact"
                onClick={() => {
                  setNav(false);
                }}
              >
                My Ledger
              </Link>
            </li>
            <li className="hover:bg-Dark hover:text-white p-4 lg:rounded-lg">
              <Link
                href="/pages/Contact"
                onClick={() => {
                  setNav(false);
                }}
              >
                Bank Details
              </Link>
            </li>
          </ul>
        )}
        {userAccount.Admin && (
          <ul
            className={`links h-full lg:flex flex-col lg:flex-row gap-4 lg:items-center text-[17px] text-secondary mt-3 lg:mt-0  ${
              !nav && "hidden"
            }`}
          >
            <li className="hover:bg-Dark hover:text-white p-4 lg:rounded-lg">
              <Link
                href="/adminPages/Home"
                onClick={() => {
                  setNav(false);
                }}
              >
                Bookings
              </Link>
            </li>
            <li className="hover:bg-Dark hover:text-white p-4 lg:rounded-lg">
              <Link
                href="/adminPages/Tickets/Pending"
                onClick={() => {
                  setNav(false);
                }}
              >
                Pending
              </Link>
            </li>
            <li className="hover:bg-Dark hover:text-white p-4 lg:rounded-lg">
              <Link
                href="/adminPages/Tickets/Booked"
                onClick={() => {
                  setNav(false);
                }}
              >
                Booked
              </Link>
            </li>
            <li className="hover:bg-Dark hover:text-white p-4 lg:rounded-lg">
              <Link
                href="/adminPages/Tickets/Record"
                onClick={() => {
                  setNav(false);
                }}
              >
                Record
              </Link>
            </li>
            <li className="hover:bg-Dark hover:text-white p-4 lg:rounded-lg">
              <Link
                href="/adminPages/Bank"
                onClick={() => {
                  setNav(false);
                }}
              >
                Bank Details
              </Link>
            </li>
          </ul>
        )}
        <button
          className={`rounded-full relative lg:flex flex justify-center items-center bg-Dark p-4 justify-self-end ${
            !nav && "hidden"
          }`}
          onClick={() => {
            setDrop(!drop);
          }}
        >
          <FaUser className="text-[24px] text-white " />
        </button>
        <div
          className={`dropdown absolute bg-white p-4 rounded-lg right-[15px] bottom-[-160px] z-[2000] ${
            drop ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {!userAccount ? (
              "Loading"
            ) : (
              <>
                <li>{userAccount && userAccount.name}</li>
                <li>{userAccount && userAccount.email}</li>
                <button className="bg-red-500 text-white" onClick={logout}>
                  Logout
                </button>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Dashboard;

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowUp, FaComputer, FaUser } from "react-icons/fa6";
import { RiShutDownLine } from "react-icons/ri";
import { motion } from "framer-motion";
const Dashboard = () => {
  const [nav, setNav] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  return (
    <>
      <motion.nav
        initial={nav ? { width: 90 } : { width: 300 }}
        animate={nav ? { width: 300 } : { width: 90 }}
        layout
        className=" fixed left-[0px] h-screen w-[300px]  text-white  p-4 bg-purple-600 grid  grid-rows-[200px,1fr] z-[100]"
      >
        {/* nav head */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => {
            setNav(!nav);
            setSubMenu(false);
          }}
        >
          <div className="relative h-[60px] w-[60px] rounded-full bg-white">
            <Image src="/logo.svg" alt="logo" fill objectFit="contain" />
          </div>
          {nav && <p className="text-[20px] font-bold">Travel Wavezs</p>}
        </div>

        <ul className=" h-full text-[14px] flex flex-col gap-3">
          {/*  navigation bar items */}
          <li className="p-4 bg-purple-700 rounded-lg flex gap-2 items-center">
            <FaComputer className="text-lg" />
            {nav && `Dashboard `}
          </li>
          <motion.li
            className="p-4  bg-purple-700 rounded-lg grid  overflow-hidden"
            layout
          >
            <div
              className="drop-head flex justify-between items-center"
              onClick={() => {
                setSubMenu(!subMenu);
              }}
            >
              {nav && `Tickets`}
              <motion.div
                initial={!subMenu ? { rotate: 180 } : { rotate: 0 }}
                animate={subMenu ? { rotate: 180 } : { rotate: 0 }}
                layout
              >
                <FaArrowUp className="" />
              </motion.div>
            </div>
            <motion.ul
              initial={subMenu ? { height: 0 } : { height: "auto" }}
              animate={subMenu ? { height: "auto" } : { height: 0 }}
              className={`Droplink right-[-100px] pl-4 flex gap-2 flex-col   overflow-hidden w-full  ${
                !nav &&
                `absolute bg-purple-400 right-[-90px] text-white shadow-xl${
                  !subMenu && "w-0"
                }`
              }`}
              layout
            >
              <li>
                <Link
                  href="/adminPages/Add"
                  onClick={() => {
                    setNav(false);
                    setSubMenu(false);
                  }}
                >
                  Add
                </Link>
              </li>
              <li>Pending</li>
              <li>Approved</li>
              <li>Reserved</li>
            </motion.ul>
          </motion.li>
          <li className="p-4 bg-purple-700 rounded-lg flex gap-2">
            <FaUser />
            {nav && `Users`}
          </li>
          <li className="p-4 bg-red-400 rounded-lg flex gap-2">
            <RiShutDownLine className="text-lg" />
            {nav && `Logout`}
          </li>
        </ul>
      </motion.nav>
    </>
  );
};

export default Dashboard;

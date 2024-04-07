"use client";
import React from "react";

import Image from "next/image";

import { useState } from "react";
import axios from "axios";
import HeadTitle from "../../components/admincomponents/HeadTitle/HeadTitle";
import Dashboard from "../../components/admincomponents/navigation/Dashboard";

export default function App() {
  return (
    <>
      <Dashboard />

      <main className="grid grid-cols-[90px,1fr]">
        {/* for just nav space */}
        <nav></nav>
        <section className="grid grid-rows-[60px,1fr]  h-screen">
          {/* page title */}
          <HeadTitle title="DashBoard" />
          {/* main section */}
          <section className="p-[16px] overflow-y-auto overflow-x-hidden h-full bg-gray-200 grid grid-cols-2 gap-[20px]">
            {/* all tickets */}
            <section className="rounded-2xl min-h-full bg-white col-span-2"></section>
            {/* pending approval */}
            <section className="rounded-2xl min-h-full bg-white "></section>
            {/* approved */}
            <section className="rounded-2xl min-h-full bg-white "></section>
          </section>
        </section>
      </main>
    </>
  );
}

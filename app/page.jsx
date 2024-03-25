"use client";
import Image from "next/image";
import React from "react";
import { easeInOut, motion } from "framer-motion";
import {
  FaHatCowboy,
  FaHotel,
  FaMap,
  FaPersonCane,
  FaPlaneDeparture,
} from "react-icons/fa6";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="hero w-full relative h-[400px] flex justify-center items-center p-3">
        <Image
          src="/HeroImages/travel-city-newyork.jpg"
          alt="new york city Image.jpg"
          fill
          objectFit="cover"
          priority
        />
        <div className="overlay absolute w-full h-full bg-Dark bg-opacity-80"></div>
        <article className="text-white z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: easeInOut, duration: 0.7 }}
            className="spaced-title text-[25px] "
          >
            Welcome to SkyWay !!
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: easeInOut, duration: 0.7, delay: 0.2 }}
            className="sub text-special "
          >
            Where Dreams Take Flight!
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: easeInOut, duration: 0.7, delay: 0.4 }}
            className="text-center mt-[10px] text-white text-opacity-70"
          >
            Immerse yourself in a world of possibilities as you browse through
            our curated collection of destinations, each offering its own unique
            charm and allure.
          </motion.p>
        </article>
        {/* ticket section */}
        <section className="absolute z-20 bottom-0 w-[80%] min-h-[100px] rounded-[15px] shadow-md shadow-Dark bg-white translate-y-[40px]"></section>
      </section>
      {/* Home cards after hero */}
      <section className="homeSec1 min-h-[200px] mt-20 px-10 gap-[40px] grid lg:grid-cols-4 items-center justify-items-center my-[20px] ">
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.7, delay: 0.4 }}
          className="relative flex justify-center items-center flex-col  gap-[10px]"
        >
          <div className="icon">
            <FaMap className="text-[20px]" />
          </div>
          <h2 className="title">Customized Itineraries</h2>
          <p className="description text-xs text-center">
            Personalized travel plans tailored to your preferences and
            interests.
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.7, delay: 0.5 }}
          className="relative flex justify-center items-center flex-col  gap-[10px]"
        >
          <div className="icon">
            <FaHatCowboy className="text-[20px]" />
          </div>
          <h2 className="title">Expert Guides</h2>
          <p className="description text-xs text-center">
            Knowledgeable and experienced guides to accompany you on your
            journey
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.7, delay: 0.7 }}
          className="relative flex justify-center items-center flex-col  gap-[10px]"
        >
          <div className="icon">
            <FaPlaneDeparture className="text-[20px]" />
          </div>
          <h2 className="title text-center">Seamless Transportation</h2>
          <p className="description text-xs text-center">
            Hassle-free transportation arrangements for smooth and comfortable
            travels
          </p>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: easeInOut, duration: 0.7, delay: 0.8 }}
          className="relative flex justify-center items-center flex-col  gap-[10px]"
        >
          <div className="icon">
            <FaHotel className="text-[20px]" />
          </div>
          <h2 className="title text-center">Exclusive Accommodations</h2>
          <p className="description text-xs text-center">
            Handpicked selection of accommodations ranging from boutique hotels
            to luxury resorts.
          </p>
        </motion.article>
      </section>
      <section className="packages">
        <h1 className="title">Featured Destinations</h1>
        <div className="gallery grid grid-cols-4 grid-rows-4">
          <div className="article col-span-2 row-span-2 bg-primary rounded-sm"></div>
          <div className="article bg-secondary rounded-sm"></div>
          <div className="article bg-primary rounded-sm"></div>
        </div>
      </section>
    </>
  );
}

import React from "react";
import "./Footer.css";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      <section className="bottom-title bg-orange-500 p-4 flex items-center justify-center ">
        <div className="text-white">Travel your way around the world</div>
      </section>
      <footer className="bg-primary bg-opacity-20 flex flex-wrap px-[40px] py-[100px] justify-around">
        <aritcle className="w-full flex flex-col justify-center items-center gap-[10px] pb-[20px]">
          <h1 className="title">Our Brief History</h1>
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            mollitia ratione neque sed quas, excepturi in sint ex quisquam nisi
            tempore eos inventore, placeat deserunt ipsa ipsam minima reiciendis
            aspernatur dolor quibusdam? Quisquam quod perferendis repellendus
            vitae mollitia eveniet voluptate.
          </p>
        </aritcle>
        <section className="footer-section">
          <h1 className="title ">Want to get in touch?</h1>
          <article className="box">
            <div className="subTiltle">Call 24/7 for inquirires</div>
            <a className="spcLink " href="tel:0524563707">
              052-8979090
            </a>
          </article>
          <article className="box">
            <div className="subTiltle">Call 24/7 for inquirires</div>
            <a className="spcLink " href="tel:0524563707">
              052-8979090
            </a>
          </article>
          <article className="box">
            <div className="subTiltle">Call 24/7 for inquirires</div>
            <a className="spcLink " href="tel:0524563707">
              052-8979090
            </a>
          </article>
        </section>
        <section className="footer-section">
          <h1 className="title ">Quick Links</h1>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pages/Packages">Packages</Link>
            </li>
            <li>
              <Link href="/pages/About">About</Link>
            </li>
            <li>
              <Link href="/pages/Contact">Contact</Link>
            </li>
          </ul>
        </section>
        <section className="footer-section">
          <h1 className="title ">Socials</h1>
          <ul>
            <li>
              <Link href="/">Facebook</Link>
            </li>
            <li>
              <Link href="/">Twitter</Link>
            </li>
            <li>
              <Link href="/">Instagram</Link>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}

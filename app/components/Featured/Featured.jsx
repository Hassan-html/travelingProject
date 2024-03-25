import React from "react";
import "./Featured.css";
import { easeInOut, motion } from "framer-motion";
function Featured() {
  const arrayForsection = [{}, {}, {}, {}, {}];
  return (
    <>
      <section className="grid grid-cols-2 justify-items-center items-center h-[600px] p-20">
        <article>
          <h1 className="text-secondary text-[20px]">Get Packages</h1>
          <h3 className="text-primary text-opacity-80">
            Some kinda slogen here
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            adipisci, optio impedit hic sint sequi quis repellendus. Qui,
            officiis deserunt?
          </p>
        </article>
        <section className="scrolled-section relative w-full h-full grid gap-[100px] overflow-y-auto snap-y snap-mandatory">
          {arrayForsection.map((item, index) => {
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: easeInOut }}
                className="w-full h-[400px] bg-secondary rounded-md snap-start snap-always"
              ></motion.article>
            );
          })}
        </section>
        <article className="crousel"></article>
      </section>
    </>
  );
}

export default Featured;

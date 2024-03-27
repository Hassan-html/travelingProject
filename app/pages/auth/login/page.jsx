"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formHandler = async (e) => {
    e.preventDefault();
    signIn("credentials", { email, password });
    console.log("Register");
  };
  return (
    <>
      <section className="mt-20">
        <div className="title text-secondary text-center p-4 text-[30px]">
          Login
        </div>

        <form
          className="max-w-xl  mx-auto  flex flex-col p-5 mt-4 gap-5 "
          onSubmit={formHandler}
        >
          <input
            type="email"
            placeholder="email"
            autoComplete="of"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
            autoComplete="of"
            required
          />

          <div className="cmd flex flex-col items-center gap-4">
            <button className="bg-primary text-white w-full rounded-md">
              Login
            </button>
            {/* <span
              className={
                err
                  ? ` w-80 text-center bg-red text-white`
                  : " w-80 text-center bg-green text-white"
              }
            >
              {err && err}
              {success && success}{" "}
            </span> */}
            <div className="txt">
              or if you Dont have an account{" "}
              <Link
                href="/pages/auth/register"
                className=" underline text-special"
              >
                Register
              </Link>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

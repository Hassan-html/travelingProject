"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState();
  const [success, setSuccess] = useState("");

  const navigate = useRouter();

  const formHandler = async (e) => {
    e.preventDefault();

    axios
      .post("/api/controllers/login", JSON.stringify({ email, password }))
      .then((res) => {
        console.log(res);
        navigate.push("/pages/profile/helo");
      })
      .catch((err) => setErr(err.response.data.message));
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
            <span
              className={
                err
                  ? ` w-80 text-center bg-red text-red-600`
                  : " w-80 text-center bg-green text-green-800"
              }
            >
              {err && err}
              {success && success}{" "}
            </span>
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

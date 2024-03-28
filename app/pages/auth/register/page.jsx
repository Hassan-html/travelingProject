"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function Register() {
  const router = useRouter();
  const [body, setBody] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [success, setSuccess] = useState("");
  const [err, setErr] = useState("");
  const [userCreated, setUserCreated] = useState(true);

  const formHandler = (e) => {
    e.preventDefault();
    console.log(body);

    axios
      .post("/api/controllers/register", JSON.stringify(body))
      .then((res) => {
        console.log(res);
        setErr("");
        setSuccess("User Registered");
        router.push("/pages/auth/login");
      })
      .catch((err) => {
        const error = err.response.data.message;
        toast.error(error);
        setErr(error);
        setSuccess("");
      });
  };
  useEffect(() => {
    setInterval(() => {
      setErr("");
      setSuccess("");
    }, 5000);
  }, []);

  return (
    <section className="relative mt-20">
      <div
        className={
          !userCreated
            ? " absolute w-full h-full bg-white bg-opacity-80 mx-auto mt-10 text-2xl w-30  flex items-center justify-center"
            : "hidden"
        }
      >
        <div className="loader"></div>
      </div>

      <div className="title text-secondary text-center p-4 text-[30px]">
        Register
      </div>

      <form
        className="max-w-xl  mx-auto  flex flex-col p-5 mt-4 gap-10 "
        onSubmit={formHandler}
      >
        <div className="flex flex-col lg:grid grid-cols-2 lg:gap-1 gap-10">
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => {
              setBody({ ...body, FirstName: e.target.value });
            }}
            autoComplete="of"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            autoComplete="of"
            onChange={(e) => {
              setBody({ ...body, LastName: e.target.value });
            }}
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          autoComplete="of"
          onChange={(e) => {
            setBody({ ...body, email: e.target.value });
          }}
          required
        />
        <input
          type="password"
          placeholder="password"
          autoComplete="of"
          onChange={(e) => {
            setBody({ ...body, password: e.target.value });
          }}
          required
        />
        <input
          type="password"
          placeholder="Confirm password"
          required
          autoComplete="of"
          onChange={(e) => {
            setBody({ ...body, password_confirmation: e.target.value });
          }}
        />
        <div className="cmd flex flex-col items-center gap-2">
          <button className="bg-primary text-white w-full rounded-md">
            Register Account
          </button>
          <span
            className={
              err
                ? ` w-80 text-center bg-red text-red-600`
                : " w-80 text-center bg-green  text-green-400"
            }
          >
            {err && err}
            {success && success}
          </span>
          <div className="txt">
            or if you already have account{" "}
            <Link href="/pages/auth/login" className=" underline text-special">
              Sign-In
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}

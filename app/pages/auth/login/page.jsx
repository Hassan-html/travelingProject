"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FileInput, Toast } from "flowbite-react";
import ComponentSpinner from "../../../components/spinnerPage/componentSpinner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState();
  const [success, setSuccess] = useState("");
  const [userLogged, setUserLogged] = useState(true);

  const navigate = useRouter();

  const formHandler = async (e) => {
    e.preventDefault();
    setUserLogged(false);

    axios
      .post("/api/controllers/login", JSON.stringify({ email, password }))
      .then((res) => {
        console.log(res);
        toast.success("Loged In");
        navigate.push("/pages/profile/helo");
      })
      .catch((err) => {
        setErr(err.response.data.message);
        toast.error(err.response.data.message);
        setUserLogged(true);
      });
    if (err || success) {
      setInterval(() => {
        setErr();
        setSuccess();
      }, 3000);
    }
  };
  return (
    <>
      <section className="mt-20">
        <div className="title text-secondary text-center p-4 text-[30px]">
          Login
        </div>

        <form
          className="relative max-w-xl  mx-auto  flex flex-col p-5 mt-4 gap-5 "
          onSubmit={formHandler}
        >
          {!userLogged && (
            <div className="overlay top-0 left-0 absolute w-full h-full z-[100] ">
              <ComponentSpinner />
            </div>
          )}

          <input
            id="email"
            type="email"
            placeholder="Email"
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

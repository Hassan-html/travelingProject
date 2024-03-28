"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
const Profile = () => {
  const { id } = useParams();
  const navigate = useRouter();
  const logout = () => {
    axios
      .get("/api/controllers/logout")
      .then((res) => {
        console.log(res.data);
        navigate.push("/pages/auth/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      This is profile {id} <button onClick={logout}>Sign Out</button>
    </>
  );
};

export default Profile;

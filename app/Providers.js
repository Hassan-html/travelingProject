"use client";
import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const logedInContext = createContext();

export function useLogedProvider() {
  return useContext(logedInContext);
}

export const LogedProvider = ({ children }) => {
  const [logedIn, setLogedIn] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    axios
      .get("/api/controllers/user")
      .then((res) => {
        setUser({ userId: res.data.message, logedStatus: res.data.logedIn });
      })
      .catch((err) => {
        setUser(false);
        console.log(err);
      });
  }, []);
  return (
    <logedInContext.Provider value={user}>
      {!user ? <h1>Loading</h1> : children}
    </logedInContext.Provider>
  );
};

"use client";

import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
import SpinnerPage from "./components/spinnerPage/spinner";

const logedInContext = createContext();

export function useLogedProvider() {
  return useContext(logedInContext);
}

export const LogedProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    axios
      .get("/api/controllers/user")
      .then((res) => {
        setUser({ userId: res.data.message, logedStatus: res.data.logedIn });
      })
      .catch((err) => {
        setUser({ userId: err, logedStatus: false });
        console.log(err);
      });
  }, [user]);
  return (
    <logedInContext.Provider value={user}>
      {!user ? <SpinnerPage /> : children}
    </logedInContext.Provider>
  );
};

import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
export const Profile_Screen = () => {
  const navigate = useNavigate();
  const getDataHandle = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log("isLoggedIn", isLoggedIn);
  };
  const HandleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }
  return (
    <>
      <div>profile screen</div>
      <Button onClick={getDataHandle}>Get Data</Button>
      <Button onClick={HandleLogout} variant="outlined" color="primary">Logout</Button>
    </>
  );
};
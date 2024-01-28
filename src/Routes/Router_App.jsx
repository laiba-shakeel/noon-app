import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home_Screen from "../Pages/Home";
import  Login  from "../Pages/Auth/Login";
// import { Register } from "../pages/Register";
import { Private_Routes } from "./Private_Route";
import { Public_Routes } from "./Public_Route";
import {Profile_Screen} from "../Pages/Auth/Profile"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<Private_Routes />}>
        {/* These childerns are Outlet------ */}
        <Route path="" element={<Home_Screen />} />
        <Route path="/profile" element={<Profile_Screen />} />
        <Route path="/products" element={<Home_Screen/>} />
        {/* Outlet end------ */}
      </Route>

      <Route path="" element={<Public_Routes />}>
        <Route path="login" element={<Login />} />
        {/* <Route path="register" element={<Register />} /> */}
      </Route>
    </Route>
  )
);

export const Router_App = () => {
  return <RouterProvider router={router} />;
};
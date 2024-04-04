import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import CatPage from "./Pages/CatPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import SignupPage from "./Pages/SignupPage.jsx";
import Standard from "./Pages/SubPage/Standard.jsx";
import Offroad from "./Pages/SubPage/Offroad.jsx";
import Ev from "./Pages/SubPage/Ev.jsx";
import Hyper from "./Pages/SubPage/Hyper.jsx";
import Sports from "./Pages/SubPage/Sports.jsx";
import Customize from "./Pages/SubPage/Customised.jsx";
import { LoaderInfo } from "./components/SingleCard/MultiCard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<LandingPage />} />
      <Route path="categories" element={<CatPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="hyper" loader={LoaderInfo} element={<Hyper />} />
      <Route path="standard" element={<Standard />} />
      <Route path="sports" element={<Sports />} />
      <Route path="offroad" element={<Offroad />} />
      <Route path="ev" element={<Ev />} />
      <Route path="customize" element={<Customize />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

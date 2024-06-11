import React from "react";

// Router
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./Components/Header/Header.tsx";
import Hero from "./Components/Hero/Hero.tsx";
import Features from "./Components/Features/Features.tsx";
import BestSelling from "./Components/BestSelling/BestSelling.tsx";
import CTA from "./Components/CTA/CTA.tsx";

// Pages
import SignInPage from "./Pages/SignInPage.tsx";
import SignUpPage from "./Pages/SignUpPage.tsx";
import ForgetPassword from "./Pages/ForgetPasswordPage.tsx";
import ResetPasswordPage from "./Pages/ResetPasswordPage.tsx";
import AddProduct from "./Components/Add Product/AddProduct.tsx";

const App = () => {
  return (
    <>
      <Header />
      <AddProduct/>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="forget-password" element={<ForgetPassword />} />
      </Routes>
    </>
  );
};

export default App;

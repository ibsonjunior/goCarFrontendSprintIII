import React, { useContext } from "react";

import { Context } from "../Context/Context";

import ContextProvider from "../Context/Context";

import SecondaryHeader from "../components/Headers/Header_Secondary";
import MainHeader from "../components/Headers/Header_Main";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Booking from "../pages/Booking";
import BookingDone from "../pages/BookingDone";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Footer from "../components/Footer";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const RouteList = () => {
  const usuarioLogado = localStorage.getItem("token");

  const { dataUser, carsProducts, carsImage } = useContext(Context);

  const { id } = useParams();

  const selectedProduct = carsProducts?.find((product) => product?.id == id);

  console.log(dataUser)

  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <header>
            {usuarioLogado ? (
              <SecondaryHeader />
            ) : (
              <MainHeader product={selectedProduct}/>
            )}
          </header>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/product/:id/reserve" element={<Booking />} />
            <Route path="/reserve-done" element={<BookingDone />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>

          <footer>
            <Footer />
          </footer>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
};

export default RouteList;
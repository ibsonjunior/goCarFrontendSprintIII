import React, { useContext, useEffect } from "react";

import { Context } from "../Context/Context";

import HeaderInfoProduct from "../components/Headers/Header_InfoProduct";
import BookingForm from "../components/Booking/Booking_Form";
import BookingUserData from "../components/Booking/Booking_UserData";
import BookingDetails from "../components/Booking/Booking_Details";
import BookingCalendar from "../components/Booking/Booking_Calendar";
import BookingTimeBlock from "../components/Booking/Booking_TimeBlock";
import Policies from "../components/Policies";

import "../styles/Booking.css";

import { useParams } from "react-router-dom";

import { Container } from "react-bootstrap";

function Booking() {
  const { carsProducts, carsImage } = useContext(Context);
  const { id } = useParams();
  const selectedProduct = carsProducts?.find((product) => product?.id == id);

  const funct = () => {
    console.log("função do booking");
  };

  //   const imagesProduct = carsImage?.filter((images) => {
  //     const name = selectedProduct?.name?.split(" ");
  //     return images?.title?.includes(name[0]);
  //   });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <>

      <HeaderInfoProduct products={selectedProduct} />

      <BookingForm products={selectedProduct} />

      {/* <Container fluid className="booking_container">
        <div className="booking_form_title">
          <h1>Complete seus dados</h1>
        </div>
        <BookingUserData submit={funct} />
        <BookingDetails products={selectedProduct} />
        <BookingCalendar />
        <BookingTimeBlock />
      </Container> */}

      <Policies />
    </>
  );
}

export default Booking;

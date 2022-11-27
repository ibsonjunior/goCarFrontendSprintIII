import React, { useContext, useEffect } from "react";

import { Context } from "../../../Context/Context";

import "./style.css";

import { format } from "date-fns";

import { Container, Card } from "react-bootstrap";

import { MapPin } from "phosphor-react";

function BookingDetails({ products, form, setDate, submit }) {
  const { calendar } = useContext(Context);

  const startDate = calendar?.map((date) => {
    return format(date?.startDate, "dd/MM/yyyy");
  });

  const endDate = calendar?.map((date) => {
    return format(date.endDate, "dd/MM/yyyy");
  });

  const newFormatStartDate = startDate[0];
  const newFormatEndDate = endDate[0];

  useEffect(() => {
    setDate({
      ...form,
      checkin: newFormatStartDate,
      checkout: newFormatEndDate,
    });
  }, [newFormatStartDate, newFormatEndDate]);

  return (
    <>
      <Container fluid className="booking_details_container">
        <Card className="booking_details_card">
          <div className="booking_details_card_title">
            <h1>Detalhe da reserva</h1>
          </div>

          <div className="booking_details_card_image">
            <img
              src="https://turismo.praiagrande.sp.gov.br/wp-content/uploads/2021/07/construcao.png"
              alt=""
            />
          </div>

          <Container fluid className="booking_details_info_container">
            <div className="booking_details_info-product">
              <h4 className="booking_details_info_title-category">
                {products?.category?.qualification}
              </h4>
              <h2 className="booking_details_info_title-product">
                {products?.name}
              </h2>
            </div>

            <div className="booking_details_info-location">
              <h5 className="booking_details_info_title-location">
                <MapPin size={24} /> {products?.city?.name},{" "}
                {products?.city?.country}
              </h5>
            </div>

            <Container fluid className="booking_details_info-check">
              <div className="booking_details_info-checkin">
                <h4>Check in</h4>
                <h4>{startDate}</h4>
              </div>

              <div className="booking_details_info-line"></div>

              <div className="booking_details_info-checkout">
                <h4>Check out</h4>
                <h4>{endDate}</h4>
              </div>

              <button
                className="booking_details_info-button"
                onClick={() => {
                  submit();
                }}
              >
                Confirmar reserva
              </button>
            </Container>
          </Container>
        </Card>
      </Container>
    </>
  );
}

export default BookingDetails;

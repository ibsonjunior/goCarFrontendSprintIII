import React from "react";

import "../styles/BookingDone.css";

import { Container, Card } from "react-bootstrap";

import { CircleWavyCheck } from "phosphor-react";

import { Link } from "react-router-dom";

function BookingDone() {
  return (
    <>
      <Container fluid className="booking_done_container">
        <Card className="booking_done_card">
          <CircleWavyCheck size={120} className="booking_done_check-item" />

          <h1 className="booking_done_title">Muito obrigado!</h1>

          <h3 className="booking_done_description">
            Sua reserva foi feita com sucesso
          </h3>

          <Link to="/">
            <button className="booking_done_button">Ok</button>
          </Link>
        </Card>
      </Container>
    </>
  );
}

export default BookingDone;
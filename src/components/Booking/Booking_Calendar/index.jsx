import React from "react";

import Calendar from "../../Calendar";

import "./style.css";

import { Container } from "react-bootstrap";

function BookingCalendar() {
  return (
    <>
      <Container fluid className="booking_calendar_container">
        <div className="booking_calendar_title">
          <h1>Selecione sua data de reserva</h1>
        </div>
        <Calendar />
      </Container>
    </>
  );
}

export default BookingCalendar;
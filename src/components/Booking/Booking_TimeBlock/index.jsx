import React from "react";

import "./style.css";

import { Container, Card } from "react-bootstrap";

import { CheckCircle } from "phosphor-react";

function BookingTimeBlock({ form, setTime }) {
  return (
    <>
      <Container fluid className="booking_timeblock_container">
        <div className="booking_timeblock_title">
          <h1>Seu horário de chegada</h1>
        </div>

        <Card className="booking_timeblock_card">
          <div className="booking_timeblock_card-title">
            <h4>
              <CheckCircle size={32} /> Seu carro estará pronto para retirada
              entre 10h00 e 23h00
            </h4>
          </div>

          <div className="booking_timeblock_select">
            <label htmlFor="time">Indique a sua hora prevista de chegada</label>
            <select
              name="time"
              id="time"
              defaultValue={"default"}
              aria-required
              onChange={(e) =>
                setTime({
                  ...form,
                  time: e.target.value,
                })
              }
            >
              <option value="default" disabled>
                Selecione a sua hora de chegada
              </option>
              <option value="01:00 AM">01:00 AM</option>
              <option value="02:00 AM">02:00 AM</option>
              <option value="03:00 AM">03:00 AM</option>
              <option value="04:00 AM">04:00 AM</option>
              <option value="05:00 AM">05:00 AM</option>
              <option value="06:00 AM">06:00 AM</option>
              <option value="07:00 AM">07:00 AM</option>
              <option value="08:00 AM">08:00 AM</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 AM">12:00 AM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
              <option value="07:00 PM">07:00 PM</option>
              <option value="08:00 PM">08:00 PM</option>
              <option value="09:00 PM">09:00 PM</option>
              <option value="10:00 PM">10:00 PM</option>
              <option value="11:00 PM">11:00 PM</option>
              <option value="12:00 PM">12:00 PM</option>
            </select>
          </div>
        </Card>
      </Container>
    </>
  );
}

export default BookingTimeBlock;
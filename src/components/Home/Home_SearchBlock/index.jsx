import React, { useState } from "react";

import Calendar from "../../Calendar";

import { Container } from "react-bootstrap";

import { CalendarPlus, ArrowCircleUp } from "phosphor-react";

function HomeSearchBlock() {
  const [expand, setExpand] = useState(false);

  function showCalendar() {
    setExpand(!expand);
    console.log("botão funcionando");
  }

  return (
    <div className="second_header">
      <h2>Faça sua reserva</h2>

      <div className="options">
        <div className="input_flex">
          <label htmlFor="city_name">Cidade</label>
          <input type="text" className="city_name" placeholder="Cidade" />
        </div>

        <div className="input_flex">
          <div className="selecione">Selecione</div>
          <button className="date" onClick={showCalendar}>
            {" "}
            Check-in / Check-out <CalendarPlus size={30} color="#F55E00" />{" "}
          </button>
        </div>

        <div className="input_flex">
          <br />
          <button className="btn_header">Buscar</button>
        </div>
      </div>

      <Container fluid className={`box ${expand ? " " : "hide"}`}>
        <div className="seta" onClick={showCalendar}>
          <ArrowCircleUp size={45} />
        </div>
        <Calendar />
      </Container>
    </div>
  );
}

export default HomeSearchBlock;
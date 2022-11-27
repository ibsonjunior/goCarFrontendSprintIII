import React, { useContext } from "react";

import { Context } from "../../../Context/Context";

import Calendar from "../../Calendar";

import "./style.css";

import { Container } from "react-bootstrap";

import { Link, useLocation } from "react-router-dom";

function ProductCalendar({ product }) {
  const { rent } = useContext(Context);
  const result = rent * 300;
  const usuarioLogado = localStorage.getItem("nome");

  const location = useLocation();


  return (
    <>
      <div className="calendar">
        <div className="DatasTitulo">
          <h1>Datas Disponíveis</h1>
        </div>

        <div className="dateRange">
          <Container fluid>
            <Calendar />
          </Container>

          <div className="align">
            <div className="s-text">
              <h4>Simule seu aluguel para ver os preços exatos :</h4>
            </div>
            <div className="simulation">
              <div className="result">
                <h4>
                  {rent} Dias x $300,00 = {result},00
                </h4>
                <span>Valor da diária é $300,00</span>
              </div>
              {usuarioLogado ? (
                <Link
                  to={`/product/${product?.id}/reserve`}
                  className="link_button"
                >
                  <button className="reserva-btn">Alugue Agora</button>
                </Link>
              ) : (
                <Link
                  state={location.pathname}
                  to={ "/signin" }
                  className="link_button"
                >
                  <button className="reserva-btn">Alugue Agora</button>
                </Link>
                // `/product/${product?.id}/reserve/signin`
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCalendar;
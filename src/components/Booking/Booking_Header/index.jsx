import React from "react";

import "./style.css";

import { Link } from "react-router-dom";

import { CaretLeft } from "phosphor-react";

function BookingHeader({ products }) {
  return (
    <>
      <div className="product">
        <header className="product_page">
          <div className="info_car">
            <h2 className="title_category">
              {products?.category?.qualification}
            </h2>
            <h2 className="title_car">{products?.name}</h2>
          </div>
        </header>

        <Link to="/">
          <CaretLeft size={40} className="icon-previus" />
        </Link>
      </div>
    </>
  );
};

export default BookingHeader;
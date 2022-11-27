import React from "react";

import "../Header_InfoProduct/style.css";

import { Container } from "react-bootstrap";

import { Link } from "react-router-dom";

import { CaretLeft } from "phosphor-react";

function HeaderInfoProduct({ products }) {
  return (
    <>
      <Container fluid className="header_infoproduct_container">
        <div className="header_infoproduct_container_product">
          <h2 className="header_infoproduct_container_product-category">
            {products?.category?.qualification}
          </h2>
          <h2 className="header_infoproduct_container_product-name">
            {products?.name}
          </h2>
        </div>

        <Link to="/">
          <CaretLeft
            size={40}
            className="header_infoproduct_container_icon-previous"
          />
        </Link>
      </Container>
    </>
  );
}

export default HeaderInfoProduct;
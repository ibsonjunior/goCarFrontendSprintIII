import React from "react";

import HeaderInfoProduct from "../../Headers/Header_InfoProduct";

import "../Product_Header/style.css";

import { MapPin } from "phosphor-react";

function ProductHeader({ products }) {
  return (
    <>
      <HeaderInfoProduct products={products} />
      <div className="location">
        <div className="info_location">
          <MapPin size={30} />
          <h2 className="title_location">
            {products?.city?.name}, {products?.city?.country}
          </h2>
        </div>
      </div>
    </>
  );
}

export default ProductHeader;
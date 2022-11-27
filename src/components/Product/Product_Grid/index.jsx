import React, { useState } from "react";

import ProductModal from "../Product_Modal/";

import "../Product_Grid/style.css";

import { ArrowRight } from "phosphor-react";

function ProductGrid({ product }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="images">
        <div className="grid_images">
          {product.slice(0, 5).map((images, id) => (
            <img className={`img${id}`} src={images.urlImage} alt="" />
          ))}
        </div>
        <div className="div_btn">
          <button
            className="btn_modal"
            onClick={() => {
              setModalShow(true);
            }}
          >
            Ver mais
          </button>
          <ArrowRight className="btn_arrow" size={25} />
        </div>
      </div>

      <ProductModal
        products={product}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ProductGrid;
import React, { useContext, useState, useEffect } from "react";

import { Context } from "../Context/Context";

import ProductHeader from "../components/Product/Product_Header";
import ProductGrid from "../components/Product/Product_Grid";
import ProductCarousel from "../components/Product/Product_Carousel";
import ProductFeatures from "../components/Product/Product_Features";
import ProductCalendar from "../components/Product/Product_Calendar";
import Policies from "../components/Policies";

import "../styles/Product.css";

import { useParams } from "react-router-dom";

import { ShareNetwork, Heart } from "phosphor-react";

function Product() {
  //Informações que vem da API
  const { carsProducts, carsImage } = useContext(Context);
  // Id do Produto/Parâmetro
  const { id } = useParams();
  //Mudança de estado de acordo com o tamanho da tela
  const [isMobile, setIsMobile] = useState(false);
  //Mudança de estado de acordo com o tamanho da tela
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1025px)");
    const listener = () => setIsMobile(media.matches);
    listener();
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [isMobile]);

  // Filtro a partir do click
  const selectedProduct = carsProducts?.find((product) => product?.id == id);

  const imagesProduct = carsImage?.filter((images) => {
    const name = selectedProduct?.name?.split(" ");
    return images?.title?.includes(name[0]);
  });
  // const imagesProduct = carsImage?.find((images) => images.title == selectedProduct.name)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <ProductHeader products={selectedProduct} />

        <div className="icons_div">
          <ShareNetwork size={32} />
          <Heart size={32} />
        </div>

        {isMobile ? (
          <ProductGrid product={imagesProduct} />
        ) : (
          <ProductCarousel product={imagesProduct} />
        )}

        <ProductFeatures product={selectedProduct} />

        <ProductCalendar product={selectedProduct} />

        <Policies />
      </section>
    </>
  );
}

export default Product;
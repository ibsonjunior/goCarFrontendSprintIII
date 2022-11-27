import React from "react";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function ProductCarousel({ product }) {
  const productImages = product?.map((prodImages) => {
    return prodImages?.urlImage;
  });

  const urlImages = productImages?.map((imagesLib) => {
    return {
      original: imagesLib,
      thumbnail: imagesLib,
    };
  });

  return (
    <>
      <div className="slider_mobile">
        <ImageGallery autoPlay="true" items={urlImages} />
      </div>
    </>
  );
}

export default ProductCarousel;
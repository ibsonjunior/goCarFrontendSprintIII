import React from "react";

import "../Product_Modal/style.css";

import { Modal } from "react-bootstrap";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function ProductModal(props) {
  const productImages = props.products.map((prodImages) => {
    return prodImages.urlImage;
  });

  const urlImages = productImages.map((imagesLib) => {
    return {
      original: imagesLib,
      thumbnail: imagesLib,
    };
  });

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="bg-white-transparent"
        data-focus="true"
      >
        <Modal.Header
          id="harmonyModal-header"
          closeButton
          className="boxModal bg-white "
        >
          <Modal.Title
            id="contained-modal-title-vcenter "
            className=" text-dark"
          >
            Audi
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="boxModal bg-white bg-gradient-white text-light">
          <ImageGallery autoPlay="true" items={urlImages} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductModal;
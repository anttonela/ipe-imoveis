import React, { useState } from "react";
import Modal from "./Modal";

const defaultImg =
  "https://freepikpsd.com/wp-content/uploads/2019/10/default-profile-image-png-1-Transparent-Images.png";
const ImageSlide = ({ url }) => {
  const [imgClicked, setImageClicked] = useState("");
  const [isShowModal, setIshowModal] = useState(false);

  const imageClicked = e => {
    setImageClicked(e.target.src);
    setIshowModal(true);
  };
  const closeModal = () => {
    setIshowModal(false);
  };
  return (
    <>
      {isShowModal && <Modal imageUrl={imgClicked} closeModal={closeModal} />}
      <div onClick={e => imageClicked(e)}>
        <img
          className="image-slide"
          src={url}
          alt={defaultImg}
          width="200"
          height="200"
        />
      </div>
    </>
  );
};
export default ImageSlide;

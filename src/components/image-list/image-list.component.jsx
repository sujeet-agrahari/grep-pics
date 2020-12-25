import React from "react";
import "./image-list.style.scss";
import ImageCard from "../image-card/image-card.component";

const ImageList = (props) => {
  return (
    <div className="image-list">
      {props.images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;

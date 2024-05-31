import { ImageCard } from "../ImageCard/ImageCard";
import { nanoid } from "nanoid";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.imageList}>
      {images.map((image) => {
        const id = nanoid();
        return (
          <li key={id}>
            <ImageCard image={image} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;

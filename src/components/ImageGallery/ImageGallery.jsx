import { ImageCard } from "../ImageCard/ImageCard";
import { nanoid } from "nanoid";

export const ImageGallery = ({ images, onClick }) => {
  console.log(images);
  return (
    <ul>
      {images.map((image) => {
        const id = nanoid();
        return (
          <>
            <li key={id}>
              <ImageCard image={image} onClick={onClick} />
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
{
  /* <li>  <ImageCard prop={image} />     </li> */
}

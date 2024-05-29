import { ImageCard } from "../ImageCard/ImageCard";
import { nanoid } from "nanoid";

export const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ul>
      {images.map((image) => {
        const id = nanoid();
        return (
          <>
            <li key={id}>
              <ImageCard image={image} />
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

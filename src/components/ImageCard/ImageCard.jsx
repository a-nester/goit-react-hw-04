import css from "./ImageCard.module.css";

export const ImageCard = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image);
  };
  const { small, alt_description } = image.urls;
  return (
    <>
      <img
        className={css.imageListItem}
        src={small}
        alt={alt_description}
        onClick={handleClick}
      />
    </>
  );
};

export default ImageCard;

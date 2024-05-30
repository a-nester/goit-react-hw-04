export const ImageCard = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(regular);
  };
  console.log(image);
  const { small, regular, alt_description } = image.urls;
  return (
    <>
      <img src={small} alt={alt_description} onClick={handleClick} />
    </>
  );
};

export default ImageCard;

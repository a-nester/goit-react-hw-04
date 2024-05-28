export const ImageCard = ({ image }) => {
  console.log(image);
  const { small, alt_description } = image.urls;
  return (
    <>
      <img src={small} alt={alt_description} />
    </>
  );
};

export default ImageCard;

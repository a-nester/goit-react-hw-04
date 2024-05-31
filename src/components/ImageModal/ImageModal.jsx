import "./ImageModal.css";

export const ImageModal = ({ modalData }) => {
  const { urls, description, likes, user } = modalData;
  return (
    <div>
      <img src={urls.regular} />
      <p>
        Author: {user.first_name} {user.last_name}
      </p>
      <p>Likes: {likes}</p>
      <p className="quote">Quote: {description}</p>
      {console.log()}
    </div>
  );
};

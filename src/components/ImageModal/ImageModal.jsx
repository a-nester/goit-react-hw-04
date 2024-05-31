export const ImageModal = ({ modalData }) => {
  const { urls, description, likes, user } = modalData;
  return (
    <div>
      <img src={urls.regular} />
      <p>
        Author: {user.first_name} {user.last_name}
      </p>
      <p>Likes: {likes}</p>
      <p>Quote: {description}</p>
      {console.log()}
    </div>
  );
};

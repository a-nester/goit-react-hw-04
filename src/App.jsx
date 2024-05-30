import "./App.css";
import { ThreeDots } from "react-loader-spinner";
import { useEffect, useState } from "react";
import Modal from "react-modal";

import { createFetch } from "./api-fetch";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { SearchBar } from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function App() {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    const handleFetch = async () => {
      try {
        setError(false);
        setLoader(true);
        const data = await createFetch(topic, page);
        setImages((prev) => [...prev, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    topic && handleFetch();
  }, [topic, page]);

  const handleSearch = async (newTopic) => {
    setTopic(newTopic);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (regular) => {
    setIsOpen(true);
    setModalImage(regular);
  };

  const afterOpenModal = () => {};

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Modal
        id="modal"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <img src={modalImage} />
        </div>
      </Modal>
      {images.length > 0 && (
        <ImageGallery images={images} onClick={openModal} />
      )}

      {error && <ErrorMessage />}
      {loader && (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      {images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
      )}
    </>
  );
}

export default App;

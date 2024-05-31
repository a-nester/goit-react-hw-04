import "./App.css";
import { ThreeDots } from "react-loader-spinner";
import { useEffect, useState } from "react";
import Modal from "react-modal";

import { createFetch } from "./api-fetch";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { SearchBar } from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { ImageModal } from "./components/ImageModal/ImageModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  quote: {
    height: "200px",
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
  const [modalData, setModalData] = useState("");
  const [total, setTotal] = useState([]);
  useEffect(() => {
    const handleFetch = async () => {
      try {
        setError(false);
        setLoader(true);
        const data = await createFetch(topic, page);
        setImages((prev) => [...prev, ...data.results]);
        setTotal(data.total);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    topic && handleFetch();
  }, [topic, page]);

  console.log(total);
  const handleSearch = (newTopic) => {
    newTopic !== topic && setImages([]);
    setTopic(newTopic);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (regular) => {
    setIsOpen(true);
    setModalData(regular);
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
        <ImageModal modalData={modalData} />
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
      {images.length > 0 && images.length < total && (
        <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
      )}
    </>
  );
}

export default App;

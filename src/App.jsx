import "./App.css";
import { ThreeDots } from "react-loader-spinner";
import { useEffect, useState } from "react";
// import Modal from "react-modal";

import { createFetch } from "./api-fetch";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";
import { ImageModal } from "./components/ImageModal/ImageModal";
// import { customStyles } from "./helpers";
import { threeDotsStyles } from "./helpers";

// Modal.setAppElement("#root");

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

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery
          images={images}
          modalData={modalData}
          onClick={openModal}
        />
      )}
      {modalIsOpen && (
        <ImageModal
          modalData={modalData}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
      {error && <ErrorMessage />}
      {loader && (
        <ThreeDots
          styles={threeDotsStyles}
          wrapperStyle={{ justifyContent: "center" }}
        />
      )}
      {images.length > 0 && images.length < total && (
        <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
      )}
    </>
  );
}

export default App;

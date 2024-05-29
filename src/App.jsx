import "./App.css";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { createFetch } from "./api-fetch";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { SearchBar } from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const handleSearch = async (topic, page) => {
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

  const handleLoadMore = () => {
    setPage(page + 1);
    handleSearch(topic, page);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageGallery images={images} />}
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
      <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
    </>
  );
}

export default App;

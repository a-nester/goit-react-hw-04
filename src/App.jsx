import { useState } from "react";
import "./App.css";
import { createFetch } from "./api-fetch";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [images, setImages] = useState([]);
  const handleSearch = async (topic) => {
    try {
      const data = await createFetch(topic);
      setImages(data);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery images={images} />
    </>
  );
}

export default App;

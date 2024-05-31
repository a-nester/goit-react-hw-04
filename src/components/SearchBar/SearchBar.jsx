import css from "./SearchBar.module.css";
import { FcSearch } from "react-icons/fc";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.input.value;
    onSearch(topic);
  };
  return (
    <header>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn}>
          <FcSearch className="svgSearchBtn" size="30" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;

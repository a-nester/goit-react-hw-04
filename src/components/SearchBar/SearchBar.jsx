export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.input.value;
    onSearch(topic);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button></button>
      </form>
    </header>
  );
};

export default SearchBar;

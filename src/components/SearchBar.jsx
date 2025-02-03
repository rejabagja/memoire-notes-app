import { TSearchBar } from "./types";

function SearchBar({ keyword, keywordChange }) {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="search by title ..."
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </section>
  );
}

SearchBar.propTypes = TSearchBar;

export default SearchBar;

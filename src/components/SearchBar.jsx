import { TSearchBar } from "./types";
import { useContext } from "react";
import LocaleContext from "../contexts/locale";

function SearchBar({ keyword, keywordChange }) {
  const { locale } = useContext(LocaleContext);

  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder={
          locale === "id"
            ? "Mencari berdasarkan judul ..."
            : "search by title ..."
        }
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </section>
  );
}

SearchBar.propTypes = TSearchBar;

export default SearchBar;

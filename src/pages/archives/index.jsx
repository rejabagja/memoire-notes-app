import { searchNotes } from "../../utils/notes";
import SearchBar from "../../components/SearchBar";
import NotesList from "../../components/NotesList";
import { useArchives } from "./hooks";

function PageArchives() {
  const { notes, keyword, changeSearchKeyword } = useArchives();
  const filteredNotes = searchNotes(keyword, notes);

  return (
    <section className="archives-page">
      <h2>Archived Notes</h2>
      <SearchBar keyword={keyword} keywordChange={changeSearchKeyword} />
      <NotesList notes={filteredNotes} />
    </section>
  );
}

export default PageArchives;

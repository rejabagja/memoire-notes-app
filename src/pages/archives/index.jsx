import { searchNotes } from "../../utils/notes";
import SearchBar from "../../components/SearchBar";
import NotesList from "../../components/NotesList";
import { useArchives } from "./hooks";
import { useContext } from "react";
import LocaleContext from "../../contexts/locale";
import AuthedUserDisplay from "../../components/AuthedUserDisplay";

function PageArchives({ authedUserName }) {
  const { locale } = useContext(LocaleContext);
  const { notes, keyword, changeSearchKeyword } = useArchives();
  const filteredNotes = searchNotes(keyword, notes);

  return (
    <section className="archives-page">
      <AuthedUserDisplay name={authedUserName} />
      <h2>{locale === "id" ? "Catatan Arsip" : "Archived Notes"}</h2>
      <SearchBar keyword={keyword} keywordChange={changeSearchKeyword} />
      <NotesList notes={filteredNotes} />
    </section>
  );
}

export default PageArchives;

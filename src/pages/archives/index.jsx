import { searchNotes } from "@utils/notes";
import SearchBar from "@components/SearchBar";
import NotesList from "@components/NotesList";
import { useArchives } from "./hooks";
import { useContext } from "react";
import LocaleContext from "@contexts/locale";
import AuthUserContext from "@contexts/auth-user";
import AuthedUserDisplay from "@components/AuthedUserDisplay";

function PageArchives() {
  const { locale } = useContext(LocaleContext);
  const { authedUser } = useContext(AuthUserContext);
  const { notes, keyword, changeSearchKeyword } = useArchives();
  const filteredNotes = searchNotes(keyword, notes);

  return (
    <section className="archives-page">
      <AuthedUserDisplay name={authedUser.name} />
      <h2>{locale === "id" ? "Catatan Arsip" : "Archived Notes"}</h2>
      <SearchBar keyword={keyword} keywordChange={changeSearchKeyword} />
      <NotesList notes={filteredNotes} />
    </section>
  );
}

export default PageArchives;

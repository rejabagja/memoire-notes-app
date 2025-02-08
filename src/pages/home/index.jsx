import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import NotesList from "../../components/NotesList";
import AuthedUserDisplay from "../../components/AuthedUserDisplay";
import { BiPlus } from "react-icons/bi";
import { searchNotes } from "../../utils/notes";
import { useHome } from "./hooks";
import { useContext } from "react";
import LocaleContext from "../../contexts/locale";

function PageHome({ authedUserName }) {
  const { locale } = useContext(LocaleContext);
  const { keyword, notes, changeSearchKeyword } = useHome();
  const filteredNotes = searchNotes(keyword, notes);

  return (
    <section className="homepage">
      <AuthedUserDisplay name={authedUserName} />
      <h2>{locale === "id" ? "Catatan Aktif" : "Active Notes"}</h2>
      <SearchBar keyword={keyword} keywordChange={changeSearchKeyword} />
      <NotesList notes={filteredNotes} />
      <div className="homepage__action">
        <Link to="/notes/new">
          <button
            type="button"
            className="action"
            title={locale === "id" ? "Buat Catatan Baru" : "Create New Note"}
          >
            <BiPlus />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default PageHome;

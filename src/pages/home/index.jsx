import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import NotesList from "../../components/NotesList";
import { BiPlus } from "react-icons/bi";
import { searchNotes } from "../../utils/local-data";
import { useHome } from "./hooks";

function PageHome({ authedUserName }) {
  const { keyword, notes, changeSearchKeyword } = useHome();
  const filteredNotes = searchNotes(keyword, notes);

  return (
    <section className="homepage">
      <p className="username">
        <i>Welcome back</i>, <b>{authedUserName}</b>
      </p>
      <h2>Active Notes</h2>
      <SearchBar keyword={keyword} keywordChange={changeSearchKeyword} />
      <NotesList notes={filteredNotes} />
      <div className="homepage__action">
        <Link to="/notes/new">
          <button type="button" className="action" title="Create New Note">
            <BiPlus />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default PageHome;

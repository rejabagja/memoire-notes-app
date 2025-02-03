import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getActiveNotes, searchNotes } from "../../utils/local-data";
import AppLayout from "../../components/layouts/app";
import SearchBar from "../../components/SearchBar";
import NotesList from "../../components/NotesList";
import { BiPlus } from "react-icons/bi";

function PageHome() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(
    () => searchParams.get("keyword") || ""
  );

  function changeSearchKeyword(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  useEffect(() => {
    setNotes(getActiveNotes());
  }, []);

  const filteredNotes = searchNotes(keyword, notes);

  return (
    <AppLayout>
      <section className="homepage">
        <h2>Active Notes</h2>
        <SearchBar keyword={keyword} keywordChange={changeSearchKeyword} />
        <NotesList notes={filteredNotes} />
        <div className="homepage__action">
          <Link to="/notes/new">
            <button type="button" className="action" title="create">
              <BiPlus />
            </button>
          </Link>
        </div>
      </section>
    </AppLayout>
  );
}

export default PageHome;

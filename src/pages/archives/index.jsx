import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes, searchNotes } from "../../utils/local-data";
import AppLayout from "../../components/layouts/app";
import SearchBar from "../../components/SearchBar";
import NotesList from "../../components/NotesList";

function PageArchives() {
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
    setNotes(getArchivedNotes());
  }, []);

  const filteredNotes = searchNotes(keyword, notes);

  return (
    <AppLayout>
      <section className="archives-page">
        <h2>Archived Notes</h2>
        <SearchBar keyword={keyword} keywordChange={changeSearchKeyword} />
        <NotesList notes={filteredNotes} />
      </section>
    </AppLayout>
  );
}

export default PageArchives;

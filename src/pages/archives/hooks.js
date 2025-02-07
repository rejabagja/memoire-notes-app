import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../../utils/notes";

function useArchives() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState(null);
  const [keyword, setKeyword] = useState(
    () => searchParams.get("keyword") || ""
  );

  function changeSearchKeyword(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  useEffect(() => {
    const fetchArchivedNotes = async () => {
      const { error, data } = await getArchivedNotes();
      if (!error) {
        setNotes(data);
      }
    };
    fetchArchivedNotes();
    document.title = "Memoire Notes App | Archive";
  }, []);

  return { notes, keyword, changeSearchKeyword };
}

export { useArchives };
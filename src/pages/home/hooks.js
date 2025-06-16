import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes } from "@utils/notes";

function useHome() {
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
    const fetchActiveNotes = async () => {
      const { error, data } = await getActiveNotes();
      if (!error) {
        setNotes(data);
      }
    };
    fetchActiveNotes();
  }, []);

  return { notes, keyword, changeSearchKeyword };
}

export { useHome };
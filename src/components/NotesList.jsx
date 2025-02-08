import NoteItem from "./NoteItem";
import { TNotesList } from "./types";
import { useContext } from "react";
import LocaleContext from "../contexts/locale";

function NotesList({ notes }) {
  const { locale } = useContext(LocaleContext);

  if (!notes)
    return (
      <p>{locale === "id" ? "Memuat catatan ..." : "fetching notes ..."}</p>
    );

  return (
    <>
      {notes.length ? (
        <section className="notes-list">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              title={note.title}
              createdAt={note.createdAt}
              body={note.body}
            />
          ))}
        </section>
      ) : (
        <section className="notes-list-empty">
          <p>{locale === "id" ? "Tidak ada catatan" : "No notes"}</p>
        </section>
      )}
    </>
  );
}

NotesList.propTypes = TNotesList;

export default NotesList;

import NoteItem from "./NoteItem";
import { TNotesList } from "./types";

function NotesList({ notes }) {
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
          <p>No notes found</p>
        </section>
      )}
    </>
  );
}

NotesList.propTypes = TNotesList;

export default NotesList;

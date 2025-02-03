import PropTypes from "prop-types";
import NoteItem from "./NoteItem";
import { noteItemPropTypes } from "../types";

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

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(noteItemPropTypes)).isRequired,
};

export default NotesList;

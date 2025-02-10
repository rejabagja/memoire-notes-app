import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import parser from "html-react-parser";
import { TNoteItem } from "./types";
import { useContext } from "react";
import LocaleContext from "@contexts/locale";

function NoteItem({ id, title, createdAt, body }) {
  const { locale } = useContext(LocaleContext);
  return (
    <article className="note-item">
      <Link to={`/notes/${id}`}>
        <h3 className="note-item__title">{title}</h3>
      </Link>
      <p className="note-item__createdAt">
        {showFormattedDate(createdAt, locale === "id" ? "id-ID" : "en-US")}
      </p>
      <p className="note-item__body">{parser(body)}</p>
    </article>
  );
}

NoteItem.propTypes = TNoteItem;

export default NoteItem;

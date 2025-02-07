import { showFormattedDate } from "../../utils";
import parser from "html-react-parser";
import { BiArchiveIn, BiArchiveOut, BiTrashAlt } from "react-icons/bi";
import { useDetails } from "./hooks";

function PageDetail() {
  const { note, loading, handleArchive, handleDelete } = useDetails();

  if (loading) return <p>fetching data ...</p>;

  return (
    <>
      {note ? (
        <>
          <section className="detail-page">
            <h3 className="detail-page__title">{note.title}</h3>
            <p className="detail-page__createdAt">
              {showFormattedDate(note.createdAt)}
            </p>
            <div className="detail-page__body">{parser(note.body)}</div>
          </section>
          <div className="detail-page__action">
            <button
              className="action"
              title={note.archived ? "Active" : "Archive"}
              type="button"
              onClick={handleArchive}
            >
              {note.archived ? <BiArchiveOut /> : <BiArchiveIn />}
            </button>
            <button
              className="action"
              title="Delete"
              type="button"
              onClick={handleDelete}
            >
              <BiTrashAlt />
            </button>
          </div>
        </>
      ) : (
        <section className="detail-page-empty">
          <h3>404 | Notes not found</h3>
        </section>
      )}
    </>
  );
}

export default PageDetail;

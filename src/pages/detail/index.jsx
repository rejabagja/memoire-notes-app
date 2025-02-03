import { useNavigate, useParams } from "react-router-dom";
import AppLayout from "../../components/layouts/app";
import { useEffect, useState } from "react";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../../utils/local-data";
import { showFormattedDate } from "../../utils";
import parser from "html-react-parser";
import { BiArchiveIn, BiArchiveOut, BiTrashAlt } from "react-icons/bi";
import Swal from "sweetalert2";

function PageDetail() {
  const navigate = useNavigate();
  const { noteId } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const note = getNote(noteId);
    setNote(note);
  }, [noteId]);

  const handleArchive = () => {
    if (!note.archived) {
      archiveNote(noteId);
    } else {
      unarchiveNote(noteId);
    }

    navigate("/");
  };

  const handleDelete = async () => {
    const { isConfirmed } = await showConfirm();
    if (!isConfirmed) {
      return;
    }

    deleteNote(noteId);
    navigate("/");
  };

  const showConfirm = () => {
    return Swal.fire({
      title: "Are you sure want to delete this note?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      icon: "warning",
    });
  };

  return (
    <AppLayout>
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
    </AppLayout>
  );
}

export default PageDetail;

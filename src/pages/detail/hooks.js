import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { archiveNote, getNote, showDeleteNoteConfirm, unarchiveNote } from "../../utils/notes";
import { showErrorAlert } from "../../utils";

function useDetails() {
  const navigate = useNavigate();
  const { noteId } = useParams();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNote(noteId).then(({ data }) => {
      setLoading(false);
      setNote(data);
    });
  }, [noteId]);

  useEffect(() => {
    document.title = "Memoire Notes App | Detail Note";
  }, []);

  const handleArchive = () => {
    if (!note.archived) {
      archiveNote(noteId).then(({ error }) => {
        if (error) {
          showErrorAlert({
            title: "System Error",
            message: "failed to archive",
          });
          return;
        }
        navigate("/");
      });
    } else {
      unarchiveNote(noteId).then(({ error }) => {
        if (error) {
          showErrorAlert({
            title: "System Error",
            message: "failed to un-archive",
          });
          return;
        }
        navigate("/");
      });
    }
  };

  const handleDelete = async () => {
    const { isConfirmed } = await showDeleteNoteConfirm();
    if (!isConfirmed) {
      return;
    }

    const { error } = await deleteNote(noteId);
    if (error) {
      showErrorAlert({
        title: "System Error",
        message: "failed to delete",
      });
      return;
    }
    navigate("/");
  };

  return { note, loading, handleArchive, handleDelete };
}

export { useDetails };
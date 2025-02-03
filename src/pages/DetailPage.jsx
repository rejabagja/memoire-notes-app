import React from "react";
import AppLayout from "../components/layouts/AppLayout";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNote, getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils";
import { BiArchiveIn, BiArchiveOut, BiTrashAlt } from "react-icons/bi";
import { archiveNote, unarchiveNote } from "../utils/local-data";
import parser from "html-react-parser";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

function DetailPageWrapper() {
  const navigate = useNavigate();
  const { noteId } = useParams();

  return <DetailPage noteId={noteId} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.noteId),
    };
  }

  handleArchive = () => {
    const { noteId } = this.props;
    const { note } = this.state;

    if (!note.archived) {
      archiveNote(noteId);
    } else {
      unarchiveNote(noteId);
    }

    this.props.navigate("/");
  };

  handleDelete = async () => {
    const { isConfirmed } = await this.showConfirm();
    if (!isConfirmed) {
      return;
    }

    const { noteId } = this.props;
    deleteNote(noteId);
    this.props.navigate("/");
  };

  showConfirm = () => {
    return Swal.fire({
      title: "Are you sure want to delete this note?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      icon: "warning",
    });
  };

  render() {
    const { note } = this.state;
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
                onClick={this.handleArchive}
              >
                {note.archived ? <BiArchiveOut /> : <BiArchiveIn />}
              </button>
              <button
                className="action"
                title="Delete"
                type="button"
                onClick={this.handleDelete}
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
}

DetailPage.propTypes = {
  noteId: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default DetailPageWrapper;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../../utils/local-data";
import Swal from "sweetalert2";
import AppLayout from "../../components/layouts/app";
import { BiCheck } from "react-icons/bi";
import { useInput } from "../../utils";

function PageCreate() {
  const navigate = useNavigate();
  const [title, handleTitleChange] = useInput();
  const [body, setBody] = useState("");

  const handleBodyChange = (event) => setBody(() => event.target.innerHTML);

  const handleSave = () => {
    if (title === "" || body === "") {
      showAlert();
      return;
    }
    addNote({ title, body });
    navigate("/");
  };

  const showAlert = () => {
    Swal.fire({
      title: "Opps!",
      text: "Title and body cannot be empty.",
      icon: "error",
    });
  };

  return (
    <AppLayout>
      <section className="add-new-page">
        <div className="add-new-page__input">
          <input
            type="text"
            className="add-new-page__input__title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Input your new title here ... "
          />
          <div
            className="add-new-page__input__body"
            contentEditable
            data-placeholder="Input your new body here ... "
            onInput={handleBodyChange}
          ></div>
        </div>
        <div className="add-new-page__action">
          <button className="action" onClick={() => handleSave()} title="save">
            <BiCheck />
          </button>
        </div>
      </section>
    </AppLayout>
  );
}

export default PageCreate;

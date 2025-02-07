import AppLayout from "../../components/layouts/app";
import { BiCheck } from "react-icons/bi";
import { useCreate } from "./hooks";

function PageCreate() {
  const { title, handleTitleChange, handleBodyChange, handleSave } =
    useCreate();

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
          <button
            className="action"
            onClick={() => handleSave()}
            title="Save New Note"
          >
            <BiCheck />
          </button>
        </div>
      </section>
    </AppLayout>
  );
}

export default PageCreate;

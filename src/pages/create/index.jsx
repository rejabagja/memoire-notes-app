import { BiCheck } from "react-icons/bi";
import { useCreate } from "./hooks";
import { useContext } from "react";
import LocaleContext from "../../contexts/locale";

function PageCreate() {
  const { locale } = useContext(LocaleContext);
  const { title, handleTitleChange, handleBodyChange, handleSave } =
    useCreate();

  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input
          type="text"
          className="add-new-page__input__title"
          value={title}
          onChange={handleTitleChange}
          placeholder={
            locale === "id"
              ? "Masukan judul baru anda di sini"
              : "Input your new title here ... "
          }
        />
        <div
          className="add-new-page__input__body"
          contentEditable
          data-placeholder={
            locale === "id"
              ? "Masukan isi catatan baru anda di sini"
              : "Input your new body here ... "
          }
          onInput={handleBodyChange}
        ></div>
      </div>
      <div className="add-new-page__action">
        <button
          className="action"
          onClick={() =>
            handleSave(
              locale === "id"
                ? "Judul dan isi catatan tidak boleh kosong"
                : "Title and body cannot be empty"
            )
          }
          title={locale === "id" ? "Simpan Catatan Baru" : "Save New Note"}
        >
          <BiCheck />
        </button>
      </div>
    </section>
  );
}

export default PageCreate;

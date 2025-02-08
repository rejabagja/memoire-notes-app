import { showFormattedDate } from "../../utils";
import parser from "html-react-parser";
import { BiArchiveIn, BiArchiveOut, BiTrashAlt } from "react-icons/bi";
import { useDetails } from "./hooks";
import { useContext } from "react";
import LocaleContext from "../../contexts/locale";

function PageDetail() {
  const { locale } = useContext(LocaleContext);
  const { note, loading, handleArchive, handleDelete } = useDetails();

  if (loading)
    return <p>{locale === "id" ? "Memuat data ..." : "fetching data ..."}</p>;

  return (
    <>
      {note ? (
        <>
          <section className="detail-page">
            <h3 className="detail-page__title">{note.title}</h3>
            <p className="detail-page__createdAt">
              {showFormattedDate(
                note.createdAt,
                locale === "id" ? "id-ID" : "en-US"
              )}
            </p>
            <div className="detail-page__body">{parser(note.body)}</div>
          </section>
          <div className="detail-page__action">
            <button
              className="action"
              title={
                note.archived
                  ? locale === "id"
                    ? "Aktifkan"
                    : "Active"
                  : locale === "id"
                  ? "Arsipkan"
                  : "Archive"
              }
              type="button"
              onClick={handleArchive}
            >
              {note.archived ? <BiArchiveOut /> : <BiArchiveIn />}
            </button>
            <button
              className="action"
              title={locale === "id" ? "Hapus" : "Delete"}
              type="button"
              onClick={() => handleDelete(locale)}
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

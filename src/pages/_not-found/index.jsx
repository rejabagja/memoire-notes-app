import { Link } from "react-router-dom";
import { useContext } from "react";
import LocaleContext from "../../contexts/locale";

function PageNotFound() {
  const { locale } = useContext(LocaleContext);

  return (
    <div className="not-found-page">
      <h2>
        404 | {locale === "id" ? "Halaman Tidak Ditemukan" : "Page Not Found"}
      </h2>
      <Link to="/">{locale === "id" ? "Pergi ke Beranda" : "Go to Home"}</Link>
    </div>
  );
}

export default PageNotFound;

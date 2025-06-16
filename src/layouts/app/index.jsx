import { Link, Outlet } from "react-router-dom";
import { TAppLayout } from "@layouts/types";
import Navigation from "@components/Navigation";
import { useContext } from "react";
import LocaleContext from "@contexts/locale";

function AppLayout() {
  const { locale } = useContext(LocaleContext);
  return (
    <>
      <header>
        <h1>
          <Link
            to="/"
            title={locale === "id" ? "Pergi ke Beranda" : "Go to Home"}
            className="brand"
          >
            Memoire
          </Link>
        </h1>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

AppLayout.propTypes = TAppLayout;

export default AppLayout;

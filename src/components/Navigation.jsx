import { Link } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { FiMoon, FiSun, FiLogOut } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import ColorModeContext from "../contexts/color-mode";
import LocaleContext from "../contexts/locale";

function Navigation() {
  const { pathname } = useLocation();
  const { colorMode, toggleColorMode } = useContext(ColorModeContext);
  const { locale, toggleLocale } = useContext(LocaleContext);

  return (
    <nav className="navigation">
      <Link to="/archives" className={pathname === "/archives" ? "active" : ""}>
        {locale === "en" ? "Archives" : "Arsip"}
      </Link>
      <button
        className="toggle"
        title={
          locale === "id" ? "Ubah ke bahasa Inggris" : "Change to Indonesian"
        }
        onClick={toggleLocale}
      >
        <GrLanguage />
      </button>
      <button
        className="toggle"
        onClick={toggleColorMode}
        title={
          locale === "en"
            ? colorMode === "light"
              ? "Switch Dark Mode"
              : "Switch Light Mode"
            : colorMode === "light"
            ? "Ganti ke Mode Gelap"
            : "Ganti ke Mode Terang"
        }
      >
        {colorMode === "light" ? <FiMoon /> : <FiSun />}
      </button>
      <button className="toggle logout" title="Logout">
        <FiLogOut />
      </button>
    </nav>
  );
}

export default Navigation;

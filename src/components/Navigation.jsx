import { Link } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { FiMoon, FiSun, FiLogOut } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import ColorModeContext from "../contexts/color-mode";
import LocaleContext from "../contexts/locale";
import AuthUserContext from "../contexts/auth-user";
import { showLogoutConfirm } from "../utils/notes";
import { deleteAccessToken } from "../utils/notes";

function Navigation({ onLogout }) {
  const { pathname } = useLocation();
  const { colorMode, toggleColorMode } = useContext(ColorModeContext);
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { setAuthedUser } = useContext(AuthUserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { isConfirmed } = await showLogoutConfirm(locale);
    if (!isConfirmed) {
      return;
    }

    deleteAccessToken();
    setAuthedUser(null);
    navigate("/login");
  };

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
      <button className="toggle logout" title="Logout" onClick={handleLogout}>
        <FiLogOut />
      </button>
    </nav>
  );
}

export default Navigation;

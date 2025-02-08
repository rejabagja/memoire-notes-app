import { Link } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { FiMoon, FiSun, FiLogOut } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import ColorModeContext from "../contexts/color-mode";

function Navigation() {
  const { pathname } = useLocation();
  const { colorMode, toggleColorMode } = useContext(ColorModeContext);
  return (
    <nav className="navigation">
      <Link to="/archives" className={pathname === "/archives" ? "active" : ""}>
        Archives
      </Link>
      <button className="toggle" title="Change Language">
        <GrLanguage />
      </button>
      <button
        className="toggle"
        onClick={toggleColorMode}
        title={colorMode === "light" ? "Switch Dark Mode" : "Switch Light Mode"}
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

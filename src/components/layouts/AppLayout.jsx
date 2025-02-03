import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AppLayout({ children }) {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Memoire</Link>
        </h1>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/archives">Archives</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;

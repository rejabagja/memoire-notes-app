import { Link, Outlet } from "react-router-dom";
import { TAppLayout } from "../types";

function AppLayout() {
  return (
    <>
      <header>
        <h1>
          <Link to="/" title="Home Page">
            Memoire
          </Link>
        </h1>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/archives">Archives</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

AppLayout.propTypes = TAppLayout;

export default AppLayout;

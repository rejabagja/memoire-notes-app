import { Link, Outlet } from "react-router-dom";
import { TAppLayout } from "../types";
import Navigation from "../../Navigation";

function AppLayout() {
  return (
    <>
      <header>
        <h1>
          <Link to="/" title="Go to Home">
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

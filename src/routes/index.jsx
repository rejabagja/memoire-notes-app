import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ArchivesPage from "../pages/ArchivesPage";
import CreatePage from "../pages/CreatePage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/404NotFoundPage";

function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/archives",
      element: <ArchivesPage />,
    },
    {
      path: "/notes/:noteId",
      element: <DetailPage />,
    },
    {
      path: "/notes/new",
      element: <CreatePage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return routes;
}

export default AppRoutes;

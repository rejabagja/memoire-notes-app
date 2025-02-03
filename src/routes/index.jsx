import { useRoutes } from "react-router-dom";
import PageHome from "../pages/home";
import PageArchives from "../pages/archives";
import PageDetail from "../pages/detail";
import PageCreate from "../pages/create";
import PageNotFound from "../pages/_not-found";

function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <PageHome />,
    },
    {
      path: "/archives",
      element: <PageArchives />,
    },
    {
      path: "/notes/:noteId",
      element: <PageDetail />,
    },
    {
      path: "/notes/new",
      element: <PageCreate />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return routes;
}

export default AppRoutes;

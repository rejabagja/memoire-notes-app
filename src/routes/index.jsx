import { Routes as Router, Route } from "react-router-dom";
import PageHome from "../pages/home";
import PageArchives from "../pages/archives";
import PageDetail from "../pages/detail";
import PageCreate from "../pages/create";
import PageNotFound from "../pages/_not-found";
import PageLogin from "../pages/auth/login";
import PageRegister from "../pages/auth/register";
import AppLayout from "../components/layouts/app";
import { useContext } from "react";
import AuthUserContext from "../contexts/auth-user";

function AppRoutes() {
  const { authedUser, isLoading } = useContext(AuthUserContext);

  if (isLoading) return null;

  if (!authedUser) {
    return (
      <Router>
        <Route path="/*" element={<PageLogin />} />
        <Route path="/register" element={<PageRegister />} />
      </Router>
    );
  }

  return (
    <Router>
      <Route element={<AppLayout />}>
        <Route path="/" element={<PageHome />} />
        <Route path="/archives" element={<PageArchives />} />
        <Route path="/notes/:noteId" element={<PageDetail />} />
        <Route path="/notes/new" element={<PageCreate />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Router>
  );
}

export default AppRoutes;

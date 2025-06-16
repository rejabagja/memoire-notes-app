import { Routes as Router, Route } from "react-router-dom";
import {
  PageArchives,
  PageCreate,
  PageDetail,
  PageHome,
  PageLogin,
  PageNotFound,
  PageRegister,
} from "@pages";
import AppLayout from "@layouts/app";
import { useContext } from "react";
import AuthUserContext from "@contexts/auth-user";

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

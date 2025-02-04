import { useEffect, useState } from "react";
import AppRoutes from "./routes";
import { getUserLogged } from "./utils/notes";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchedAuthedUser = async () => {
      const { error, data } = await getUserLogged();
      if (!error) {
        setAuthedUser(data);
      }
      setInitialLoading(false);
    };
    fetchedAuthedUser();
  }, []);

  if (initialLoading) {
    return null;
  }
  return (
    <div className="app-container" data-theme="dark">
      <AppRoutes authedUser={authedUser} />
    </div>
  );
}

export default App;

import AppRoutes from "../routes";
import { useApp } from "./hooks";

function App() {
  const { authedUser, initialLoading, colorMode } = useApp();

  if (initialLoading) {
    return null;
  }

  return (
    <div className="app-container" data-theme={colorMode}>
      <AppRoutes authedUser={authedUser} />
    </div>
  );
}

export default App;

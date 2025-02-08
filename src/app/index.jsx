import { useContext } from "react";
import AppRoutes from "../routes";
import ColorModeContext from "../contexts/color-mode";

function App() {
  const { colorMode } = useContext(ColorModeContext);
  return (
    <div className="app-container" data-theme={colorMode}>
      <AppRoutes />
    </div>
  );
}

export default App;

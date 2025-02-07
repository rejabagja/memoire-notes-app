import { ColorModeProvider } from "../contexts/color-mode";
import { BrowserRouter } from "react-router-dom";

export default function AppProvider({ children }) {
  return (
    <BrowserRouter>
      <ColorModeProvider>{children}</ColorModeProvider>
    </BrowserRouter>
  );
}

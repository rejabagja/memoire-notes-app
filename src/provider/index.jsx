import { ColorModeProvider } from "../contexts/color-mode";
import { LocaleProvider } from "../contexts/locale";
import { BrowserRouter } from "react-router-dom";

export default function AppProvider({ children }) {
  return (
    <BrowserRouter>
      <ColorModeProvider>
        <LocaleProvider>{children}</LocaleProvider>
      </ColorModeProvider>
    </BrowserRouter>
  );
}

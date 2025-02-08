import { ColorModeProvider } from "../contexts/color-mode";
import { LocaleProvider } from "../contexts/locale";
import { AuthUserProvider } from "../contexts/auth-user";
import { BrowserRouter } from "react-router-dom";

export default function AppProvider({ children }) {
  return (
    <BrowserRouter>
      <AuthUserProvider>
        <ColorModeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ColorModeProvider>
      </AuthUserProvider>
    </BrowserRouter>
  );
}

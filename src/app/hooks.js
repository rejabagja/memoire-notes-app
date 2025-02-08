import { useEffect, useState, useContext } from "react";
import ColorModeContext from "../contexts/color-mode";
import AuthUserContext from "../contexts/auth-user";
import { getUserLogged, showLogoutConfirm } from "../utils/notes";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../contexts/locale";

function useApp() {
  const { colorMode } = useContext(ColorModeContext);
  const { authedUser } = useContext(AuthUserContext);

  return { authedUser, colorMode };
}

export { useApp };
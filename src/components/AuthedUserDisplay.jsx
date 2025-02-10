import { useContext } from "react";
import LocaleContext from "@contexts/locale";
import { TAuthedUserDisplay } from "./types";

function AuthedUserDisplay({ name }) {
  const { locale } = useContext(LocaleContext);
  return (
    <p className="username">
      <i>{locale === "id" ? "Selamat Datang" : "Welcome back"}</i>,{" "}
      <b>{name}</b>
    </p>
  );
}

AuthedUserDisplay.propTypes = TAuthedUserDisplay;

export default AuthedUserDisplay;

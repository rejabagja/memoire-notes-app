import AuthForm from "./AuthForm";
import AuthFormInput from "./AuthFormInput";
import { TFormRegister } from "../types";
import { useContext } from "react";
import LocaleContext from "../../contexts/locale";

function FormRegister({
  onRegister,
  name,
  password,
  email,
  confirmPassword,
  nameChange,
  passwordChange,
  confirmPasswordChange,
  emailChange,
  onRegisterError,
  loading,
}) {
  const { locale } = useContext(LocaleContext);
  return (
    <AuthForm
      title="Register"
      subtitle={
        locale === "id"
          ? "Isi form untuk mendaftar akun."
          : "Fill the form to register account."
      }
      link="login"
      error={onRegisterError}
      authHandler={onRegister}
    >
      <AuthFormInput
        label={locale === "id" ? "Nama" : "Name"}
        type="text"
        value={name}
        onChange={nameChange}
      />
      <AuthFormInput
        label="Email"
        type="text"
        value={email}
        onChange={emailChange}
      />
      <AuthFormInput
        label="Password"
        type="password"
        value={password}
        onChange={passwordChange}
      />
      <AuthFormInput
        label={locale === "id" ? "Konfirmasi Password" : "Confirm Password"}
        type="password"
        value={confirmPassword}
        onChange={confirmPasswordChange}
      />
      <button type="submit" disabled={loading}>
        {loading
          ? locale === "id"
            ? "Memproses ..."
            : "Loading ..."
          : locale === "id"
          ? "Daftar"
          : "Register"}
      </button>
    </AuthForm>
  );
}

FormRegister.propTypes = TFormRegister;

export default FormRegister;

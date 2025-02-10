import AuthForm from "./AuthForm";
import AuthFormInput from "./AuthFormInput";
import { TFormLogin } from "@components/types";
import LocaleContext from "@contexts/locale";
import { useContext } from "react";

function FormLogin({
  onLogin,
  email,
  password,
  emailChange,
  passwordChange,
  onLoginError,
  loading,
}) {
  const { locale } = useContext(LocaleContext);
  return (
    <AuthForm
      title="Sign In"
      subtitle={
        locale === "id"
          ? "Yuk, login untuk menggunakan aplikasi."
          : "Login to use app, please."
      }
      link="register"
      authHandler={onLogin}
      error={onLoginError}
    >
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
      <button type="submit" disabled={loading}>
        {loading
          ? locale === "id"
            ? "Memproses ..."
            : "Loading ..."
          : locale === "id"
          ? "Masuk"
          : "Login"}
      </button>
    </AuthForm>
  );
}

FormLogin.propTypes = TFormLogin;

export default FormLogin;

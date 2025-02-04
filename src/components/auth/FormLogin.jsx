import AuthForm from "./AuthForm";
import AuthFormInput from "./AuthFormInput";
import { TFormLogin } from "../types";

function FormLogin({
  onLogin,
  email,
  password,
  emailChange,
  passwordChange,
  onLoginError,
  loading,
}) {
  return (
    <AuthForm
      title="Sign In"
      subtitle="Login to use app, please."
      link="register"
      onsubmit={onLogin}
      error={onLoginError}
    >
      <AuthFormInput
        label="Email"
        type="email"
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
        {loading ? "Loading..." : "Login"}
      </button>
    </AuthForm>
  );
}

FormLogin.propTypes = TFormLogin;

export default FormLogin;

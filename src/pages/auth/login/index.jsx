import "@pages/auth/Auth.css";
import FormLogin from "@components/auth/FormLogin";
import AuthLayout from "@layouts/auth";
import { useLogin } from "@pages/auth/hooks";

function PageLogin() {
  const {
    email,
    emailChangeHandler,
    password,
    passwordChangeHandler,
    error,
    loading,
    loginHandler,
  } = useLogin();

  return (
    <AuthLayout page="login-page">
      <FormLogin
        email={email}
        password={password}
        emailChange={emailChangeHandler}
        passwordChange={passwordChangeHandler}
        onLogin={loginHandler}
        onLoginError={error}
        loading={loading}
      />
    </AuthLayout>
  );
}

export default PageLogin;

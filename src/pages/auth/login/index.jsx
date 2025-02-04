import "../Auth.css";
import FormLogin from "../../../components/auth/FormLogin";
import { useLogin } from "../hooks";

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
    <div className="login-page">
      <FormLogin
        email={email}
        password={password}
        emailChange={emailChangeHandler}
        passwordChange={passwordChangeHandler}
        onLogin={loginHandler}
        onLoginError={error}
        loading={loading}
      />
    </div>
  );
}

export default PageLogin;

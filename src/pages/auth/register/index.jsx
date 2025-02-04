import "../Auth.css";
import FormRegister from "../../../components/auth/FormRegister";
import { useRegister } from "../hooks";

function PageRegister() {
  const {
    name,
    nameChangeHandler,
    email,
    emailChangeHandler,
    password,
    passwordChangeHandler,
    confirmPassword,
    confirmPasswordChangeHandler,
    error,
    loading,
    registerHandler,
  } = useRegister();

  return (
    <div className="register-page">
      <FormRegister
        name={name}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        nameChange={nameChangeHandler}
        emailChange={emailChangeHandler}
        passwordChange={passwordChangeHandler}
        confirmPasswordChange={confirmPasswordChangeHandler}
        onRegister={registerHandler}
        onRegisterError={error}
        loading={loading}
      />
    </div>
  );
}

export default PageRegister;

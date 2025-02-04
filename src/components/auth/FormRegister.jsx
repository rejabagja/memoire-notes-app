import AuthForm from "./AuthForm";
import AuthFormInput from "./AuthFormInput";
import { TFormRegister } from "../types";

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
  return (
    <AuthForm
      title="Register"
      subtitle="Fill the form to register account."
      link="login"
      error={onRegisterError}
      onsubmit={onRegister}
    >
      <AuthFormInput
        label="Name"
        type="text"
        value={name}
        onChange={nameChange}
      />
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
      <AuthFormInput
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={confirmPasswordChange}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Register"}
      </button>
    </AuthForm>
  );
}

FormRegister.propTypes = TFormRegister;

export default FormRegister;

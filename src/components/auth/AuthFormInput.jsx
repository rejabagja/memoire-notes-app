import { TAuthFormInput } from "../types";

function AuthFormInput({ label, type, value, onChange }) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} value={value} onChange={onChange} />
    </>
  );
}

AuthFormInput.propTypes = TAuthFormInput;

export default AuthFormInput;

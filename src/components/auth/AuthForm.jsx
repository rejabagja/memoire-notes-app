import { Link } from "react-router-dom";
import { TAuthForm } from "../types";

function AuthForm({ children, title, subtitle, link, onsubmit, error }) {
  return (
    <div className="auth-form">
      <h2>Memoire Notes App | {title}</h2>
      <p className="auth-form__subtitle">{subtitle}</p>
      {error?.length && (
        <div className="auth-form__error">
          <p>{error}</p>
        </div>
      )}
      <div className="auth-form__input-container">
        <form onSubmit={onsubmit}>{children}</form>
      </div>
      {link === "register" && (
        <p className="auth-form__link">
          Don{"'"}t have an account? <Link to="/register">Register here</Link>
        </p>
      )}
      {link === "login" && (
        <p className="auth-form__link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      )}
    </div>
  );
}

AuthForm.propTypes = TAuthForm;

export default AuthForm;

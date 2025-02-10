import { Link } from "react-router-dom";
import { useContext } from "react";
import LocaleContext from "@contexts/locale";
import { TAuthForm } from "@components/types";

function AuthForm({ children, title, subtitle, link, authHandler, error }) {
  const { locale } = useContext(LocaleContext);

  return (
    <div className="auth-form">
      <h2>Memoire Notes App | {title}</h2>
      <p className="auth-form__subtitle">{subtitle}</p>
      {error && (
        <div className="auth-form__error">
          <p>{error}</p>
        </div>
      )}
      <div className="auth-form__input-container">
        <form onSubmit={authHandler}>{children}</form>
      </div>
      {link === "register" && (
        <p className="auth-form__link">
          {locale === "id" ? (
            <>
              Belum punya akun? <Link to="/register">Daftar di sini</Link>
            </>
          ) : (
            <>
              Don't have an account? <Link to="/register">Register here</Link>
            </>
          )}
        </p>
      )}
      {link === "login" && (
        <p className="auth-form__link">
          {locale === "id" ? (
            <>
              Sudah punya akun? <Link to="/login">Login di sini</Link>
            </>
          ) : (
            <>
              Already have an account? <Link to="/login">Login here</Link>
            </>
          )}
        </p>
      )}
    </div>
  );
}

AuthForm.propTypes = TAuthForm;

export default AuthForm;

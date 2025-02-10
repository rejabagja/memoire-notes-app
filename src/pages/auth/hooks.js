import { useState } from "react";
import { useInput } from "../../utils";
import { useNavigate } from "react-router-dom";
import { deleteAccessToken, getUserLogged, login, putAccessToken, register, validateLoginForm, validateRegisterForm } from "../../utils/notes";
import { useContext } from "react";
import AuthUserContext from "../../contexts/auth-user";
import LocaleContext from "../../contexts/locale";
import { showSuccessAlert } from "../../utils";


function useLogin() {
  const [email, emailChangeHandler] = useInput();
  const [password, passwordChangeHandler] = useInput();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuthedUser } = useContext(AuthUserContext);
  const { locale } = useContext(LocaleContext);

  const loginHandler = (e) => {
    e.preventDefault();
    setError(null);

    const error = validateLoginForm({ locale, email, password });
    if (error?.length) {
      setError(error);
      return;
    }

    setLoading(true);
    login({ email, password }).then(async ({ error: errorLogin, data, message }) => {
      setLoading(false);
      if (errorLogin) {
        setError(message);
        return;
      }
      putAccessToken(data.accessToken);

      const { error: errorFetchUser, data: userData } = await getUserLogged();
      if (!errorFetchUser) {
        setAuthedUser(userData);
        await showSuccessAlert({
          title: locale === "id" ? "Login Berhasil" : "Login Successfull",
          message:
            locale === "id"
              ? "Login berhasil! Mengarahkan Anda ke beranda..."
              : "Login successful! Taking you to the homepage...",
        });
        navigate("/");
        return;
      }
      setError("Login failed")
      deleteAccessToken();
    });
  };

  return { email, emailChangeHandler, password, passwordChangeHandler, error, loading, loginHandler };
}

function useRegister() {
  const [name, nameChangeHandler] = useInput();
  const [email, emailChangeHandler] = useInput();
  const [password, passwordChangeHandler] = useInput();
  const [confirmPassword, confirmPasswordChangeHandler] = useInput();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { locale } = useContext(LocaleContext);
  const navigate = useNavigate();

  const registerHandler = (e) => {
    e.preventDefault();
    setError(null);

    const error = validateRegisterForm({
      locale,
      name,
      email,
      password,
      confirmPassword,
    });
    if (error?.length) {
      setError(error);
      return;
    }

    setLoading(true);
    register({ name, email, password }).then(async ({ error, message }) => {
      setLoading(false);
      if (error) {
        setError(message);
        return;
      }
      await showSuccessAlert({
        title:
          locale === "id" ? "Registrasi Berhasil" : "Registration Successfull",
        message:
          locale === "id"
            ? "Akun Anda telah dibuat! Silakan login untuk mulai menggunakan layanan kami."
            : "Your account has been created! Please log in to start using our services.",
      });
      navigate("/login");
    });
  };

  return { name, nameChangeHandler, email, emailChangeHandler, password, passwordChangeHandler, confirmPassword, confirmPasswordChangeHandler, error, loading, registerHandler };
}

export { useLogin, useRegister };
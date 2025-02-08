import { useState } from "react";
import { useInput } from "../../utils";
import { useNavigate } from "react-router-dom";
import { deleteAccessToken, getUserLogged, login, putAccessToken, register, validateLoginForm, validateRegisterForm } from "../../utils/notes";
import { useContext } from "react";
import AuthUserContext from "../../contexts/auth-user";


function useLogin() {
  const [email, emailChangeHandler] = useInput();
  const [password, passwordChangeHandler] = useInput();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuthedUser } = useContext(AuthUserContext);

  const loginHandler = (e) => {
    e.preventDefault();
    setError(null);

    const error = validateLoginForm({ email, password });
    if (error?.length) {
      setError(error);
      return;
    }

    setLoading(true);
    login({ email, password }).then(async ({ error: errorLogin, data: { accessToken }, message }) => {
      setLoading(false);
      if (errorLogin) {
        setError(message);
        return;
      }
      putAccessToken(accessToken);

      const { error: errorFetchUser, data } = await getUserLogged();
      if (!errorFetchUser) {
        setAuthedUser(data);
        alert("login success");
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

  const registerHandler = (e) => {
    e.preventDefault();
    setError(null);

    const error = validateRegisterForm({
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
    register({ name, email, password }).then(({ error, message }) => {
      setLoading(false);
      if (error) {
        setError(message);
        return;
      }
      alert("berhasil register, silahkan login untuk menggunakan aplikasi");
    });
  };

  return { name, nameChangeHandler, email, emailChangeHandler, password, passwordChangeHandler, confirmPassword, confirmPasswordChangeHandler, error, loading, registerHandler };
}

export { useLogin, useRegister };
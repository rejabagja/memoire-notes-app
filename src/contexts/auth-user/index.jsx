import { createContext, useEffect, useMemo, useState } from "react";
import { getUserLogged } from "@/utils/notes";
import { TAuthUserProvider } from "@contexts/types";
const AuthUserContext = createContext();

export function AuthUserProvider({ children }) {
  const [authedUser, setAuthedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserLogged().then(({ error, data }) => {
      if (!error) {
        setAuthedUser(data);
      }
      setIsLoading(false);
    });
  }, []);

  const AuthUserContextValue = useMemo(
    () => ({
      authedUser,
      setAuthedUser,
      isLoading,
    }),
    [authedUser, isLoading, setAuthedUser]
  );

  return (
    <AuthUserContext.Provider value={AuthUserContextValue}>
      {children}
    </AuthUserContext.Provider>
  );
}

AuthUserProvider.propTypes = TAuthUserProvider;

export default AuthUserContext;

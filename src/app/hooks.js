import { useEffect, useState, useContext } from "react";
import ColorModeContext from "../contexts/color-mode";
import { getUserLogged } from "../utils/notes";

function useApp() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const { colorMode } = useContext(ColorModeContext);

  useEffect(() => {
    const fetchedAuthedUser = async () => {
      const { error, data } = await getUserLogged();
      if (!error) {
        setAuthedUser(data);
      }
      setInitialLoading(false);
    };
    fetchedAuthedUser();
  }, []);

  return { authedUser, initialLoading, colorMode };
}

export { useApp };
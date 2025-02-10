import { createContext, useEffect, useMemo, useState } from "react";
import { TLocaleProvider } from "@contexts/types";
const LocaleContext = createContext();

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(
    () => localStorage.getItem("mna-locale") || "en"
  );
  const toggleLocale = () => {
    const newLocale = locale === "en" ? "id" : "en";
    setLocale(newLocale);
    localStorage.setItem("mna-locale", newLocale);
  };

  useEffect(() => {
    localStorage.setItem("mna-locale", locale);
  }, []);

  const LocaleContextValue = useMemo(
    () => ({
      locale,
      toggleLocale,
    }),
    [locale, toggleLocale]
  );

  return (
    <LocaleContext.Provider value={LocaleContextValue}>
      {children}
    </LocaleContext.Provider>
  );
}

LocaleProvider.propTypes = TLocaleProvider;

export default LocaleContext;

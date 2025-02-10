import React from "react";
import ButtonToggle from "./ButtonToggle";
import { GrLanguage } from "react-icons/gr";
import { FiMoon, FiSun } from "react-icons/fi";
import { useContext } from "react";
import ColorModeContext from "@contexts/color-mode";
import LocaleContext from "@contexts/locale";

function FloatToggle() {
  const { colorMode, toggleColorMode } = useContext(ColorModeContext);
  const { locale, toggleLocale } = useContext(LocaleContext);
  return (
    <div className="float-toggle">
      <ButtonToggle
        title={
          locale === "id" ? "Ubah ke bahasa Inggris" : "Change to Indonesian"
        }
        onClick={toggleLocale}
      >
        <GrLanguage />
      </ButtonToggle>
      <ButtonToggle
        title={
          locale === "en"
            ? colorMode === "light"
              ? "Switch Dark Mode"
              : "Switch Light Mode"
            : colorMode === "light"
            ? "Ganti ke Mode Gelap"
            : "Ganti ke Mode Terang"
        }
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? <FiMoon /> : <FiSun />}
      </ButtonToggle>
    </div>
  );
}

export default FloatToggle;

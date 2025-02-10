import { TButtonToggle } from "./types";

function ButtonToggle({ children, title, classname, onClick }) {
  return (
    <button
      className={`toggle${classname ? " " + classname : ""}`}
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

ButtonToggle.propTypes = TButtonToggle;

export default ButtonToggle;

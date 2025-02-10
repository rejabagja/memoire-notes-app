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

export default ButtonToggle;

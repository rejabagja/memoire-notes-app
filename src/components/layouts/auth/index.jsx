import FloatToggle from "../../FloatToggle";
import { TAuthLayout } from "../types";
function AuthLayout({ children, page }) {
  return (
    <div className={page}>
      <FloatToggle />
      {children}
    </div>
  );
}

AuthLayout.propTypes = TAuthLayout;

export default AuthLayout;

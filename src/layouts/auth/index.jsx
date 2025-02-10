import FloatToggle from "@components/FloatToggle";
import { TAuthLayout } from "@layouts/types";
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

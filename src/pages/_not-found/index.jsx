import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="not-found-page">
      <h2>404 | Page Not Found</h2>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default PageNotFound;

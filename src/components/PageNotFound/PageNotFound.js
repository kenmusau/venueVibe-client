import "./PageNotFound.css";
import "./PageNotFound.css";
// import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
      </div>
      {/* <Link to="/">Home</Link> */}
    </div>
  );
};

export default PageNotFound;

import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "../context";

const PrivateRoute = ({ children, roles }) => {
  let location = useLocation();
  const { userDetails, isAuthenticated, loading } = useAuthState(); //read user details from context

  if (loading) {
    return <p className="container">Checking auth..</p>;
  }

  const userHasRequiredRole =
    userDetails && roles.includes(userDetails.session_status) ? true : false;

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <Navigate to={`/access-denied`} state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;

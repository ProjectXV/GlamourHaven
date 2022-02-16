import { Navigate, useLocation } from "react-router-dom";
import { useState } from "react";

const PrivateRoute = ({ children, roles }) => {
  let location = useLocation();
  //   const { isAuthenticated, user, loading } = useSelector((state) => state.auth);
  const { isAuthenticated, loading } = useState(false);

  if (loading) {
    return <p className="container">Checking auth..</p>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;

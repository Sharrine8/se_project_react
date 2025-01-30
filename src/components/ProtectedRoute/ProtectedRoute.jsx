import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({
  isLoggedIn,
  children,
  anonymous = false,
}) {
  const location = useLocation();
  const from = location.state?.from || "/";
  if (!anonymous && isLoggedIn) {
    console.log(isLoggedIn);
    return <Navigate to={from} />;
  }

  if (anonymous && !isLoggedIn) {
    console.log(isLoggedIn);
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}

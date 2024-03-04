import { useLocation, Navigate, Outlet } from "react-router-dom";
import useValidateJWT from "../../util/useValidateJWT";

import useRefreshToken from "../../util/useRefreshAccess";

const RequireAuth = () => {
  const { tokenData } = useRefreshToken();
  console.log(tokenData);

  const { validUser } = useValidateJWT();
  const location = useLocation();

  return validUser ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;

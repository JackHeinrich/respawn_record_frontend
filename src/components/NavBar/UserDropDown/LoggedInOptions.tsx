import { refreshPage } from "../../../util/refreshPage";

import logout from "../../../functions/users/logout";

import { useNavigate } from "react-router-dom";

export default function LoggedInOptions() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    {
      const logoutResult = await logout();
      console.log(logoutResult);
      refreshPage();
    }
  };

  const navigateToProfile = () => {
    navigate("/profile");
  };

  return (
    <li>
      <a className="dropdown-item" href="#" onClick={navigateToProfile}>
        View Profile
      </a>
      <a className="dropdown-item" href="#" onClick={handleLogout}>
        Logout
      </a>
    </li>
  );
}

import cookies from "js-cookie";

import { refreshPage } from "../../../util/refreshPage";

export default function LoggedInOptions() {
  const handleLogout = async () => {
    {
      cookies.remove("loggedIn", "False", { expires: 7 });
      cookies.remove("sessionUser");
      refreshPage();
    }
  };

  return (
    <li>
      <a className="dropdown-item" href="#">
        View Profile
      </a>
      <a className="dropdown-item" href="#" onClick={() => handleLogout()}>
        Logout
      </a>
    </li>
  );
}

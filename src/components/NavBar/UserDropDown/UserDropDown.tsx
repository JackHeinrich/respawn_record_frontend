import { useState } from "react";

import LoggedInOptions from "./LoggedInOptions";

import LoggedOutOptions from "./LoggedOutOptions";

export default function UserDropDown() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-person-circle"></i>
      </a>
      <ul className="dropdown-menu">
        {loggedIn ? (
          <LoggedInOptions setLoggedIn={setLoggedIn} />
        ) : (
          <LoggedOutOptions />
        )}
      </ul>
    </li>
  );
}

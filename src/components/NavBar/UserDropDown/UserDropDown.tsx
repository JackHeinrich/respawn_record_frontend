import React, { useState, useEffect } from "react";
import LoggedInOptions from "./LoggedInOptions";
import LoggedOutOptions from "./LoggedOutOptions";
import cookies from "js-cookie";

export default function UserDropDown() {
  const [loggedIn, setLoggedIn] = useState(cookies.get("loggedIn") === "True");

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
        {loggedIn ? <LoggedInOptions /> : <LoggedOutOptions />}
      </ul>
    </li>
  );
}

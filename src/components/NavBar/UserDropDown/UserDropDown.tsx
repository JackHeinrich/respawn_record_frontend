import LoggedInOptions from "./LoggedInOptions";
import LoggedOutOptions from "./LoggedOutOptions";

interface Props {
  validUser: {};
}

export default function UserDropDown({ validUser }: Props) {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-person-circle" />
      </a>
      <ul className="dropdown-menu">
        {validUser ? <LoggedInOptions /> : <LoggedOutOptions />}
      </ul>
    </li>
  );
}

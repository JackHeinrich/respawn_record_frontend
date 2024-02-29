import cookies from "js-cookie";

export default function UsernameDisplay() {
  const userName = cookies.get("sessionUser");
  return (
    <li className="nav-item">
      <a className="nav-link active navbar-brand" aria-current="page" href="#">
        {userName ? userName : "User"}
      </a>
    </li>
  );
}

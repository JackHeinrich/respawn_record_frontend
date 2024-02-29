interface Props {
  setLoggedIn: (value: boolean) => void;
}

export default function LoggedInOptions({ setLoggedIn }: Props) {
  return (
    <li>
      <a className="dropdown-item" href="#">
        View Profile
      </a>
      <a className="dropdown-item" href="#" onClick={() => setLoggedIn(false)}>
        Logout
      </a>
    </li>
  );
}

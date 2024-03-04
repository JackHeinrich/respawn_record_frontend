interface Props {
  validUser: {};
}

export default function UsernameDisplay({ validUser }: Props) {
  const username = validUser?.userProps?.username;
  return (
    <li className="nav-item">
      {username && (
        <a
          className="nav-link active navbar-brand"
          aria-current="page"
          href="#"
        >
          {username}
        </a>
      )}
    </li>
  );
}

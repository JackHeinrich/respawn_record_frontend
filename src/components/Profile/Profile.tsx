import NavBar from "../NavBar/NavBar";

interface Props {
  validUser: {};
}

export default function Profile({ validUser }: Props) {
  return (
    <main className="Profile">
      <NavBar validUser={validUser} />
      {validUser && (
        <>
          <a
            className="nav-link active navbar-brand"
            aria-current="page"
            href="#"
          >
            {validUser?.userProps?.email}
          </a>
          <a
            className="nav-link active navbar-brand"
            aria-current="page"
            href="#"
          >
            {validUser?.userProps?.username}
          </a>
        </>
      )}
    </main>
  );
}

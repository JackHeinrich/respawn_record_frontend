import LoginModal from "./AuthModals/LoginModal/LoginModal";

export default function LoggedOutOptions() {
  return (
    <li>
      <a
        href="#"
        className="dropdown-item"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        Login
      </a>
      <a
        href="#"
        className="dropdown-item"
        data-bs-toggle="modal"
        data-bs-target="#signUpModal"
      >
        Create Account
      </a>
    </li>
  );
}

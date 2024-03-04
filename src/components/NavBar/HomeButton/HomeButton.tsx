import { useNavigate } from "react-router-dom";

export default function HomeButton() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <li className="nav-item">
      <a
        className="nav-link active navbar-brand"
        aria-current="page"
        href="#"
        onClick={navigateToHome}
      >
        Home
      </a>
    </li>
  );
}

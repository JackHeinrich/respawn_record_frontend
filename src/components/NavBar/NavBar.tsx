import UserDropDown from "./UserDropDown/UserDropDown";
import HomeButton from "./HomeButton/HomeButton";
import SearchBar from "./SearchBar/SearchBar";

export default function NavBar() {
  return (
    <nav
      className="border-bottom border-body navbar navbar-expand-lg bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <HomeButton />
          <UserDropDown />
        </ul>
        <SearchBar />
      </div>
    </nav>
  );
}
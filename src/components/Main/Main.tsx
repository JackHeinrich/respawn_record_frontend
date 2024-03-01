import { Outlet } from "react-router-dom";

import NavBar from "../NavBar/NavBar";

import LoginModal from "../NavBar/UserDropDown/AuthModals/LoginModal/LoginModal";

import SignUpModal from "../NavBar/UserDropDown/AuthModals/SignUpModal/SignUpModal";

export default function Main() {
  return (
    <main className="App">
      <NavBar />
      <LoginModal />
      <SignUpModal />
    </main>
  );
}

import NavBar from "../NavBar/NavBar";

import LoginModal from "../NavBar/UserDropDown/AuthModals/LoginModal/LoginModal";

import SignUpModal from "../NavBar/UserDropDown/AuthModals/SignUpModal/SignUpModal";

interface Props {
  validUser: {};
}

export default function Main({ validUser }: Props) {
  return (
    <main className="App">
      <NavBar validUser={validUser} />
      <LoginModal />
      <SignUpModal />
      <p>Main</p>
    </main>
  );
}

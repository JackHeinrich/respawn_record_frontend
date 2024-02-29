import "./App.css"; // Import the CSS file

import NavBar from "./components/NavBar/NavBar";

import LoginModal from "./components/NavBar/UserDropDown/AuthModals/LoginModal/LoginModal";

import SignUpModal from "./components/NavBar/UserDropDown/AuthModals/SignUpModal/SignUpModal";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <div>
      <NavBar />
      <LoginModal />
      <SignUpModal />
    </div>
  );
}

export default App;

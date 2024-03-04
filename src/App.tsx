import "./App.css"; // Import the CSS file

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Main/Main";

import Missing from "./components/Missing/Missing";

import Profile from "./components/Profile/Profile";

import RequireAuth from "./components/Profile/RequireAuth";

import useValidateJWT from "./util/useValidateJWT";

function App() {
  const { validUser } = useValidateJWT();

  return (
    <Router>
      <Routes>
        {/* public routes */}

        <Route path="/" element={<Layout validUser={validUser} />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/profile" element={<Profile validUser={validUser} />} />
        </Route>
        {/* catch all */}

        <Route path="*" element={<Missing />} />
      </Routes>
    </Router>
  );
}

export default App;

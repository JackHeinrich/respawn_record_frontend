import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main/Main";

import Missing from "./components/Missing/Missing";

import Profile from "./components/Profile/Profile";

import RequireAuth from "./components/RequireAuth/RequireAuth";

import useValidateJWT from "./util/useValidateJWT";

import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  const { validUser } = useValidateJWT();

  return (
    <Router>
      <Routes>
        {/* public routes */}

        <Route path="/" element={<Main validUser={validUser} />} />

        <Route
          path="/search/:query"
          element={<SearchPage validUser={validUser} />}
        />
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

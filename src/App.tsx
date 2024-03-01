import "./App.css"; // Import the CSS file

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Main/Main";

import Missing from "./components/Missing/Missing";

import Test from "./components/Test/Test";

function App() {
  return (
    <Router>
      <Routes>
        {/* public routes */}

        <Route path="/" element={<Layout />} />

        {/* protected routes */}
        <Route path="test" element={<Test />} />

        {/* catch all */}

        <Route path="*" element={<Missing />} />
      </Routes>
    </Router>
  );
}

export default App;

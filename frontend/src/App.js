import Home from "./components/Home.js";

import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import "./style/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/about" element={<h2>This is about page</h2>} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
}
export default App;

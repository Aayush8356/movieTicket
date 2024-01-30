import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import { Logout } from "./components/Logout.js";
import SignUp from "./components/SignUp.js";
import Profile from "./components/Profile.js";
import "./style/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<h1>This is about page</h1>} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;

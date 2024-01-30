import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import { Logout } from "./components/Logout.js";
import SignUp from "./components/SignUp.js";
import Profile from "./components/Profile.js";
import "./style/index.css";
import { useAuth } from "./storage/auth.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { isLoggedIn, isLoading, ...rest } = useAuth();
  console.log({ isLoggedIn, isLoading, rest });
  return (
    <Router>
      <Nav />
      <Routes>
        {!isLoading && (
          <>
            {isLoggedIn ? (
              <>
                {/* Protected Routes */}
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<h1>This is about page</h1>} />
              </>
            ) : (
              <>
                {/* Public Route */}
                <Route path="/" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
              </>
            )}
          </>
        )}
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;

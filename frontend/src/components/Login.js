import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../storage/auth.js";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [invalid, setInvalid] = useState("");
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5001/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.accessToken);
        storeTokenInLS(data.accessToken);
        navigate("/home");
      } else {
        setInvalid("Invalid Credentials");
        // setUser({
        //   password: "",
        // });
        console.log("Error");
      }
    } catch (error) {
      console.log("error from login", error);
      navigate("/login");
    }
  };

  return (
    <>
      {/* <Nav show="block" /> */}
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/assests/login.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <div>
                    <h2
                      style={{
                        color: "red",
                      }}
                    >
                      {invalid}
                    </h2>
                  </div>
                  <span>
                    <Link to={"/"}>New here?</Link>
                    <button type="submit" className="btn btn-submit">
                      Login
                    </button>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;

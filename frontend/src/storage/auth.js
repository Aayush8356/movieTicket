import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [profiles, setProfile] = useState("");

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };
  let isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn);

  const storeIdInLS = (profile) => {
    setProfile(profile);
    console.log(profile, "ye id hai kya?");
    return localStorage.setItem("id", profile);
  };

  let myId = profiles;

  const LogoutUser = () => {
    setToken("");
    setProfile("");
    return localStorage.removeItem(["token", "id"]);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, myId, storeIdInLS, storeTokenInLS, LogoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};

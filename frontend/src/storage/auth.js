import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [profiles, setProfile] = useState("");
  const [user, setUser] = useState(undefined);
  const [islogged, setisLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getCurrentUser = async () => {
    const token = localStorage?.getItem("token");

    setIsLoading(true);
    if (!token) {
      setIsLoading(false);
      setisLogged(false);
      return;
    }
    const response = await fetch(`http://localhost:5001/user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok || response.status !== 200) {
      setisLogged(false);
    } else {
      const user = await response.json();
      console.log("🚀 ~ getCurrentUser ~ user:", user);
      if (user?.id) {
        setisLogged(true);
        setUser(user);
      }
    }
    setIsLoading(false);
    // console.log("🚀 ~ getCurrentUser ~ user:", user);
  };
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };
  useEffect(() => {
    getCurrentUser();
  }, []);

  // let isLoggedIn = !!token;
  // console.log("isLoggedIn", isLoggedIn);

  const storeIdInLS = (profile) => {
    setProfile(profile);
    console.log(profile, "ye id hai kya?");
    return localStorage.setItem("id", profile);
  };

  let myId = profiles;

  const LogoutUser = () => {
    setToken("");
    setProfile("");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: islogged,
        isLoading,
        user,
        reload: getCurrentUser,
        myId,
        storeIdInLS,
        storeTokenInLS,
        LogoutUser,
      }}
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

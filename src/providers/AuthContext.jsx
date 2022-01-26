import { createContext, useContext, useState } from "react";
import { api } from "../services";

const AuthContext = createContext({});

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [data, setData] = useState(() => {
    const accessToken = localStorage.getItem("@+saude:accessToken");
    const user = localStorage.getItem("@+saude:user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    } else {
      return {};
    }
  });

  const signUp = (params) => {
    api.post("/login", params).then((res) => {
      console.log("Usuário logado");
      console.log(res);

      const { accessToken, user } = res.data;

      localStorage.setItem("@+saude:accessToken", accessToken);
      localStorage.setItem("@+saude:user", JSON.stringify(user));

      setData({ accessToken, user });
    });
  };

  const logOut = () => {
    localStorage.removeItem("@+saude:accessToken");
    localStorage.removeItem("@+saude:user");
    setData({});
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        signUp: signUp,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };

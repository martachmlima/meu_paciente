import { useContext, createContext, useState, useEffect } from "react";
import { api } from "../services";

const VaccinesContext = createContext({});

export const useVaccines = () => {
  return useContext(VaccinesContext);
};

export const VaccinesProvider = ({ children }) => {
  const [accessToken] = useState(localStorage.getItem("@+saude:accessToken"));
  const [vaccines, setVaccines] = useState([]);
  useEffect(() => {
    api
      .get("/vaccines", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => setVaccines(response.data))
      .catch((err) => console.log(err));
  }, []);
  const addVaccines = () => {
    setVaccines([{ Hello: "oi" }]);
  };
  const attVaccines = () => {};
  return (
    <VaccinesContext.Provider value={{ vaccines, addVaccines, attVaccines }}>
      {children}
    </VaccinesContext.Provider>
  );
};

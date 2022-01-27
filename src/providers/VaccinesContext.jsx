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
  const getVaccines = (token) => {
    if (token) {
      api
        .get("/vaccines", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setVaccines(response.data);
        })
        .catch((err) => console.log(err));
    }
  };
  const addVaccines = (data) => {
    api
      .post("/vaccines", data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setVaccines([...vaccines, response.data]);
      })
      .catch((err) => console.log(err));
  };
  const editVaccines = (id, data) => {
    api
      .patch(`/vaccines/${id}`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .catch((err) => console.log(err));
  };
  return (
    <VaccinesContext.Provider value={{ vaccines, addVaccines, editVaccines }}>
      {children}
    </VaccinesContext.Provider>
  );
};

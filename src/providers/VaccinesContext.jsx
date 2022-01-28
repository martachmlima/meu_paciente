import { useContext, createContext, useState, useEffect } from "react";
import { api } from "../services";
import { useAuth } from "./AuthContext";

const VaccinesContext = createContext({});

export const useVaccines = () => {
  return useContext(VaccinesContext);
};

export const VaccinesProvider = ({ children }) => {
  const [accessToken] = useState(localStorage.getItem("@+saude:accessToken"));
  const [vaccines, setVaccines] = useState([]);
  const { user } = useAuth();
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
  const completeVaccines = (id) => {
    api
      .patch(
        `/vaccines/${id}`,
        { userId: user.id, completed: true },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => console.log("arquivado"))
      .catch((err) => console.log(err));
  };
  const editVaccines = (id, data) => {
    api
      .patch(`/vaccines/${id}`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((_) => getVaccines)
      .catch((err) => console.log(err));
  };
  return (
    <VaccinesContext.Provider
      value={{
        vaccines,
        addVaccines,
        editVaccines,
        getVaccines,
        completeVaccines,
      }}
    >
      {children}
    </VaccinesContext.Provider>
  );
};

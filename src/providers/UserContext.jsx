import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services";
import { useAuth } from "./AuthContext";

const UserContext = createContext({});

function useUser() {
  return useContext(UserContext);
}

function UserProvider({ children }) {
  const [medications, setMedications] = useState([]);
  const [query, setQuery] = useState([]);
  const token = localStorage.getItem("@+saude:accessToken");
  const { user } = useAuth();
  console.log(user);
  const getMedications = (token) => {
    if (token) {
      api
        .get("/medications", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setMedications(response.data);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (token) {
      api
        .get(`/users/${user.id}?_embed=appointments`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setQuery(response.data.appointments);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleQueryCompleted = (id) => {
    const completed = {
      completed: true,
    };
    if (token) {
      api
        .patch(`/appointments/${id}`, completed, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          api
            .get(`/users/${user.id}?_embed=appointments`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((response) => {
              setQuery(response.data.appointments);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <UserContext.Provider
      value={{
        getMedications,
        medications,
        setMedications,
        query,
        handleQueryCompleted,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, useUser };

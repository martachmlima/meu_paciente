import { createContext, useContext, useState } from "react";
import { api } from "../services";

const UserContext = createContext({});

function useUser() {
  return useContext(UserContext);
}

function UserProvider({ children }) {
  const [medications, setMedications] = useState([]);

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

  return (
    <UserContext.Provider
      value={{ getMedications, medications, setMedications }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, useUser };

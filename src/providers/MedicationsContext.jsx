import { createContext, useContext, useState } from "react";
import { api } from "../services";

const MedicationsContext = createContext({});

function useMedications() {
  return useContext(MedicationsContext);
}

function MedicationsProvider({ children }) {
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
    <MedicationsContext.Provider
      value={{ getMedications, medications, setMedications }}
    >
      {children}
    </MedicationsContext.Provider>
  );
}

export { MedicationsProvider, useMedications };

import { createContext, useContext, useState } from "react";
import { api } from "../services";
import { useAuth } from "./AuthContext";

const MedicationsContext = createContext({});

function useMedications() {
  return useContext(MedicationsContext);
}

function MedicationsProvider({ children }) {
  const [medications, setMedications] = useState([]);
  const { user, accessToken } = useAuth();

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

  const addMedication = (data, token) => {
    api
      .post("/medications", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMedications([...medications, response.data]);
      })
      .catch((err) => console.log(err));
  };

  const completeMedication = (id) => {
    api
      .patch(
        `/medications/${id}`,
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

  const editMedication = (id, data) => {
    api
      .patch(`/medications/${id}`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        getMedications(accessToken);
      })
      .catch((err) => console.log(err));
  };

  return (
    <MedicationsContext.Provider
      value={{
        getMedications,
        medications,
        setMedications,
        addMedication,
        completeMedication,
        editMedication,
      }}
    >
      {children}
    </MedicationsContext.Provider>
  );
}

export { MedicationsProvider, useMedications };

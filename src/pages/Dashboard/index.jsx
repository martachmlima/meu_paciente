import MedicationCard from "../../components/MedicationCard";
import { useMedications } from "../../providers/MedicationsContext";
import { useAuth } from "../../providers/AuthContext";
import { useEffect } from "react";
import { Button } from "@chakra-ui/react";

const Dashboard = () => {
  const { getMedications, medications } = useMedications();
  const { accessToken, logOut } = useAuth();

  useEffect(() => {
    getMedications(accessToken);
  }, []);

  return (
    <div>
      Dashboard
      {medications.map((medication) => (
        <MedicationCard
          key={medication.id}
          name={medication.name}
          frequency={medication.frequency}
          time={medication.time}
          use={medication.function}
        />
      ))}
      <Button onClick={logOut}>logout</Button>
    </div>
  );
};

export default Dashboard;

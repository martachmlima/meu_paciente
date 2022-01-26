import MedicationCard from "../../components/MedicationCard";
import { useUser } from "../../providers/UserContext";
import { useAuth } from "../../providers/AuthContext";
import { useEffect } from "react";

const Dashboard = () => {
  const { getMedications, medications } = useUser();
  const { accessToken } = useAuth();

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
    </div>
  );
};

export default Dashboard;

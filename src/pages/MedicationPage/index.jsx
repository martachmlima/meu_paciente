import MedicationCard from "../../components/MedicationCard";
import { useMedications } from "../../providers/MedicationsContext";
import { useAuth } from "../../providers/AuthContext";
import { useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { ModalAddMedication } from "../../components/ModalAddMedication";
import { Button } from "@chakra-ui/react";

const MedicationPage = () => {
  const { getMedications, medications, completeMedication } = useMedications();
  const { accessToken, user } = useAuth();
  const {
    isOpen: isCreateTaskOpen,
    onOpen: onCreateTaskOpen,
    onClose: onCreateTaskClose,
  } = useDisclosure();

  useEffect(() => {
    getMedications(accessToken);
  }, []);

  return (
    <div>
      {medications.map((medication) => (
        <MedicationCard
          id={medication.id}
          key={medication.id}
          name={medication.name}
          frequency={medication.frequency}
          time={medication.time}
          use={medication.function}
          currentFunction={() => completeMedication(medication.id)}
        />
      ))}
      <ModalAddMedication
        isOpen={isCreateTaskOpen}
        onClose={onCreateTaskClose}
      />
      <Button
        padding="6"
        mt="6"
        bgColor="purple.800"
        color="white"
        _hover={{ bg: "purple.900 " }}
        onClick={onCreateTaskOpen}
      >
        Adicionar Medicamento
      </Button>
    </div>
  );
};

export default MedicationPage;

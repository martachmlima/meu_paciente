import { Card, CardHeader } from "./style";
import { FaTrash } from "react-icons/fa";
import { useDisclosure } from "@chakra-ui/react";
import { ModalEditMedication } from "../ModalEditMedication";

const MedicationCard = ({
  name,
  frequency,
  time,
  use,
  currentFunction,
  id,
}) => {
  const {
    isOpen: isCreateTaskOpen,
    onOpen: onCreateTaskOpen,
    onClose: onCreateTaskClose,
  } = useDisclosure();
  return (
    <>
      <Card onClick={onCreateTaskOpen}>
        <CardHeader>
          <p>Medicação: {name}</p> <FaTrash onClick={currentFunction} />
        </CardHeader>
        <p>Frequência: {frequency}</p>
        <p>Horário: {time}</p>
        <p>Função: {use}</p>
      </Card>
      <ModalEditMedication
        isOpen={isCreateTaskOpen}
        onClose={onCreateTaskClose}
        id={id}
      />
    </>
  );
};

export default MedicationCard;

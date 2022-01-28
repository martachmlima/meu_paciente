import { Card, CardHeader, Paragraphs } from "./style";
import { FaTrash, FaCheck } from "react-icons/fa";
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
      <Card>
        <CardHeader>
          <p>Medicação: {name}</p> <FaTrash />
          <FaCheck onClick={currentFunction} />
        </CardHeader>
        <Paragraphs onClick={onCreateTaskOpen}>
          <p>Frequência: {frequency}</p>
          <p>Horário: {time}</p>
          <p>Função: {use}</p>
        </Paragraphs>
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

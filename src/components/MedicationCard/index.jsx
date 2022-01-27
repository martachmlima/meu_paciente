import { Card, CardHeader } from "./style";
import { FaTrash } from "react-icons/fa";

const MedicationCard = ({ name, frequency, time, use, currentFunction }) => {
  return (
    <Card>
      <CardHeader>
        <p>Medicação: {name}</p> <FaTrash onClick={currentFunction} />
      </CardHeader>
      <p>Frequência: {frequency}</p>
      <p>Horário: {time}</p>
      <p>Função: {use}</p>
    </Card>
  );
};

export default MedicationCard;

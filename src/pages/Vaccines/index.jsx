import { FaTrash } from "react-icons/fa";
import { useVaccines } from "../../providers/VaccinesContext";
import { Card, CardHeader } from "./style";

export const Vaccines = () => {
  const { vaccines } = useVaccines();
  console.log(vaccines);
  return (
    <div>
      <button>Adicionar vacinas</button>
      {vaccines.map((items) => (
        <>
          {!items.completed && (
            <Card>
              <CardHeader>
                <p>Tipo: {items.type}</p> <FaTrash />
              </CardHeader>
              <p>Ultima dose: {items.date}</p>
              <p>Proxima dose: {items.nextshot}</p>
            </Card>
          )}
        </>
      ))}
    </div>
  );
};

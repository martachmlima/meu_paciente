import { useDisclosure } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { ModalAddVaccines } from "../../components/ModalAddVaccines";
import { ModalEditVaccines } from "../../components/ModalEditVaccines";
import { useVaccines } from "../../providers/VaccinesContext";
import { Card, CardHeader } from "./style";

export const Vaccines = () => {
  const { vaccines } = useVaccines();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: modalEditIsOpen,
    onOpen: modalEditOnOpen,
    onClose: modalEditOnClose,
  } = useDisclosure();
  return (
    <div>
      <ModalAddVaccines isOpen={isOpen} onClose={onClose} />
      <button onClick={onOpen}>Adicionar vacinas</button>
      {vaccines.map((items) => (
        <div key={items.id}>
          {!items.completed && (
            <>
              <Card onClick={modalEditOnOpen}>
                <CardHeader>
                  <p>Tipo: {items.type}</p> <FaTrash />
                </CardHeader>
                <p>Ultima dose: {items.date}</p>
                <p>Proxima dose: {items.nextshot}</p>
              </Card>
              <ModalEditVaccines
                isOpen={modalEditIsOpen}
                onClose={modalEditOnClose}
                id={items.id}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

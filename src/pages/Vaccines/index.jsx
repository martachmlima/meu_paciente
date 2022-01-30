import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { ModalAddVaccines } from "../../components/ModalAddVaccines";
import { VaccinesCard } from "../../components/VaccinesCard";
import { useAuth } from "../../providers/AuthContext";
import { useVaccines } from "../../providers/VaccinesContext";
import { BoxCard, ButtonVaccine } from "./style";

export const Vaccines = () => {
  const { vaccines, getVaccines, completeVaccines } = useVaccines();
  const { accessToken } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logOut } = useAuth();
  useEffect(() => {
    getVaccines(accessToken);
  });
  return (
    <div>
      <ModalAddVaccines isOpen={isOpen} onClose={onClose} />
      <ButtonVaccine onClick={onOpen}>Adicionar vacinas</ButtonVaccine>
      <BoxCard>
        {vaccines.map((items) => (
          <div key={items.id}>
            {!items.completed && (
              <VaccinesCard
                type={items.type}
                date={items.date}
                nextshot={items.nextshot}
                id={items.id}
                complete={() => completeVaccines(items.id)}
              />
            )}
          </div>
        ))}
      </BoxCard>
      <ButtonVaccine onClick={logOut}>sair</ButtonVaccine>
    </div>
  );
};

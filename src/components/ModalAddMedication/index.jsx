import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import { theme } from "../../styles/global";
import InputComponent from "../input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import * as yup from "yup";
import { useAuth } from "../../providers/AuthContext";
import { useMedications } from "../../providers/MedicationsContext";

const addMedicationSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  frequency: yup.string().required("Campo obrigatório"),
  time: yup.string().required("Campo obrigatório"),
  function: yup.string().required("Campo obrigatório"),
});

export const ModalAddMedication = ({ isOpen, onClose }) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(addMedicationSchema),
  });

  const { addMedication } = useMedications();

  const { user, accessToken } = useAuth();

  const handleAddMedication = (data) => {
    const newData = { ...data, userId: user.id, completed: false };

    addMedication(newData, accessToken);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        borderRadius="0"
        as="form"
        onSubmit={handleSubmit(handleAddMedication)}
      >
        <ModalHeader color="gray.300" display="flex">
          <Text fontWeight="bold" ml="2">
            Adicionar Medicação
          </Text>
          <Center
            onClick={onClose}
            as="button"
            ml="auto"
            w="32px"
            h="32px"
            fontSize="lg"
            borderRadius="md"
          >
            <FaTimes />
          </Center>
        </ModalHeader>

        <ModalBody textAlign="center">
          <VStack spacing="2">
            <Box w="100%" paddingBottom="8">
              <InputComponent
                label="Medicação"
                errors={errors.name?.message}
                register={register}
                valueRegister="name"
                type="name"
                placeholder="Medicação"
              />
            </Box>
            <Box w="100%" paddingBottom="8">
              <InputComponent
                label="Frequência"
                errors={errors.frequency?.message}
                register={register}
                valueRegister="frequency"
                type="frequency"
                placeholder="Frequência"
              />
            </Box>
            <Box w="100%" paddingBottom="8">
              <InputComponent
                label="Horário"
                errors={errors.time?.message}
                register={register}
                valueRegister="time"
                type="time"
                placeholder="Horário"
              />
            </Box>
            <Box w="100%" paddingBottom="8">
              <InputComponent
                label="Função"
                errors={errors.function?.message}
                register={register}
                valueRegister="function"
                type="function"
                placeholder="Função"
              />
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter flexDirection="column">
          <Button
            type="submit"
            w="80%"
            h="40px"
            _hover={{ bg: "blue.300" }}
            bg="blue.750"
            borderRadius="3px"
            color="white"
          >
            Adicionar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

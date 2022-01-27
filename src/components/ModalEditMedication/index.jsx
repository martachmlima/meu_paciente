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
import { FaClipboard, FaTimes } from "react-icons/fa";
import * as yup from "yup";
import { useAuth } from "../../providers/AuthContext";
import { useMedications } from "../../providers/MedicationsContext";

const editMedicationSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  frequency: yup.string().required("Campo obrigatório"),
  time: yup.string().required("Campo obrigatório"),
  function: yup.string().required("Campo obrigatório"),
});

export const ModalEditMedication = ({ isOpen, onClose, id }) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(editMedicationSchema),
  });

  const { editMedication } = useMedications();

  const { user, accessToken } = useAuth();

  const handleEditMedication = (data) => {
    const newData = { ...data, userId: user.id };

    editMedication(id, newData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleSubmit(handleEditMedication)}
        padding="2"
        bg="white"
        color="gray.200"
      >
        <ModalHeader display="flex">
          <Center bg="blue.700" w="30px" h="30px" borderRadius="5px">
            <FaClipboard color="white" />
          </Center>
          <Text fontWeight="bold" ml="2">
            Adicionar
          </Text>
          <Center
            onClick={onClose}
            as="button"
            ml="auto"
            w="32px"
            h="32px"
            bg="red.600"
            fontSize="lg"
            borderRadius="md"
          >
            <FaTimes color="whhite" />
          </Center>
        </ModalHeader>

        <ModalBody textAlign="center">
          <VStack spacing="5">
            <Box w="100%" paddingBottom="8">
              <InputComponent
                errors={errors.name?.message}
                register={register}
                valueRegister="name"
                type="name"
                placeholder="Medicação"
              />
            </Box>
            <Box w="100%" paddingBottom="8">
              <InputComponent
                errors={errors.frequency?.message}
                register={register}
                valueRegister="frequency"
                type="frequency"
                placeholder="Frequência"
              />
            </Box>
            <Box w="100%" paddingBottom="8">
              <InputComponent
                errors={errors.time?.message}
                register={register}
                valueRegister="time"
                type="time"
                placeholder="Horário"
              />
            </Box>
            <Box w="100%" paddingBottom="8">
              <InputComponent
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
            bg="purple.500"
            color="white"
            w="100%"
            h="60px"
            _hover={{ bg: "purple.600" }}
          >
            Editar medicamento
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
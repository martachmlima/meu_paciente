import * as yup from 'yup'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'
import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import InputComponent from '../input'
import { useAuth } from '../../providers/AuthContext'
import { useUser } from '../../providers/UserContext'
function ModalAppointments() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useAuth()
  const { handlePostAppointment } = useUser()
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  const signInSchema = yup.object().shape({
    doctor: yup.string().required('Nome do Médico?'),
    date: yup.string().required('Qual a data?'),
    time: yup.string().required('Horário?'),
    contact: yup.string().required('Número para contato?')
  })

  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm({
    resolver: yupResolver(signInSchema)
  })
  const handleAppointment = data => {
    data.completed = false
    data.userId = user.id
    handlePostAppointment(data)
    onClose()
  }
  return (
    <>
      <Box w='100%' padding='12'>
        <Button colorScheme='blue' onClick={onOpen}>
          Adicionar Consulta
        </Button>
      </Box>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastre uma nova consulta</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(handleAppointment)}>
            <ModalBody pb={6}>
              <FormControl>
                <Box w='100%' paddingBottom='8'>
                  <InputComponent
                    label='Doutor'
                    errors={errors.doctor?.message}
                    register={register}
                    valueRegister='doctor'
                    placeholder='doctor'
                  />
                </Box>
              </FormControl>
              <FormControl mt={6}>
                <Box w='100%' paddingBottom='8'>
                  <InputComponent
                    label='Data'
                    errors={errors.date?.message}
                    register={register}
                    valueRegister='date'
                    type='date'
                    placeholder='Data'
                  />
                </Box>
              </FormControl>
              <FormControl mt={6}>
                <Box w='100%' paddingBottom='8'>
                  <InputComponent
                    label='Horário'
                    errors={errors.time?.message}
                    register={register}
                    valueRegister='time'
                    type='time'
                    placeholder='Horário'
                  />
                </Box>
              </FormControl>
              <FormControl mt={6}>
                <Box w='100%' paddingBottom='8'>
                  <InputComponent
                    label='Telefone'
                    errors={errors.contact?.message}
                    register={register}
                    valueRegister='contact'
                    type='tel'
                    placeholder='Contato'
                  />
                </Box>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} type='submit'>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}
export default ModalAppointments

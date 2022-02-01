import * as yup from 'yup'
import {
  Box,
  Button,
  FormControl,
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
    contact: yup
      .number()
      .typeError('Isso não é um número de telefone')
      .positive('Um número de telefone não pode começar com menos')
      .integer('Um número de telefone não pode incluir um ponto decimal')
      .min(8)
      .required('Número obrigatório')
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
      <Box w='300px' m='0 auto' padding='12'>
        <Button
          bg='blue.700'
          color='white'
          w='100%'
          h='60px'
          _hover={{ bg: 'blue.750' }}
          onClick={onOpen}>
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
              <Button
                type='submit'
                bg='blue.700'
                color='white'
                w='80%'
                h='60px'
                m='2px'
                _hover={{ bg: 'blue.750' }}>
                Save
              </Button>
              <Button
                bg='blue.700'
                color='white'
                w='80%'
                h='60px'
                m='2px'
                _hover={{ bg: 'blue.750' }}
                onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}
export default ModalAppointments

import * as yup from 'yup'
import {
  Box,
  Flex,
  Text,
  Center,
  VStack,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'
import { FaTimes } from 'react-icons/fa'
import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import InputComponent from '../input'
import { useAuth } from '../../providers/AuthContext'
import { useUser } from '../../providers/UserContext'

function ModalAppointments({ isOpen, onClose }) {
  const { user } = useAuth()
  const { handlePostAppointment } = useUser()
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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        borderRadius='8px'
        as='form'
        width={['95%', '100%']}
        padding='2'
        bg='white'
        alignItems='center'
        color='gray.200'
        onSubmit={handleSubmit(handleAppointment)}>
        <ModalHeader
          display='flex'
          padding='2'
          borderBottom='2px solid'
          borderColor='gray.400'
          width='95%'
          mb='2'>
          <Flex alignItems='center' width='95%' justifyContent='space-between'>
            <Text fontWeight='500' color='gray.200'>
              Adicionar consulta
            </Text>
            <Center
              onClick={onClose}
              as='button'
              ml='auto'
              w='32px'
              h='32px'
              fontSize='lg'
              borderRadius='md'>
              <FaTimes />
            </Center>
          </Flex>
        </ModalHeader>

        <ModalBody textAlign='start' w='100%'>
          <VStack spacing='2'>
            <Box w='100%' paddingBottom='8'>
              <InputComponent
                label='Doutor'
                errors={errors.doctor?.message}
                register={register}
                valueRegister='doctor'
                placeholder='doctor'
              />
            </Box>
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
          </VStack>
        </ModalBody>

        <ModalFooter flexDirection='column'>
          <Button
            type='submit'
            bg='blue.750'
            color='white'
            w='100%'
            borderRadius='3px'
            h='40px'
            _hover={{ bg: 'blue.300' }}>
            Concluir
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
export default ModalAppointments

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
  ModalOverlay
} from '@chakra-ui/react'
import InputMask from 'react-input-mask'
import { FaTimes } from 'react-icons/fa'
import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import InputComponent from '../input'
import { useAuth } from '../../providers/AuthContext'
import { useUser } from '../../providers/UserContext'
import { ComponentInput } from './styles'
import { FormateData } from '../../services/dateFormat'

function ModalAppointments({ isOpen, onClose }) {
  const { user } = useAuth()
  const { handlePostAppointment } = useUser()
  const signInSchema = yup.object().shape({
    doctor: yup.string().required('Nome do Médico?'),
    date: yup.string().required('Qual a data?'),
    time: yup.string().required('Horário?'),
    contact: yup
      .string()
      .required('Número obrigatório')
      .matches(
        '^([1-9]{2}) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$',
        'Formato inválido'
      )
  })

  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm({
    resolver: yupResolver(signInSchema)
  })
  const handleAppointment = data => {
    const { doctor, date, time, contact } = data
    const newData = {
      doctor,
      date: FormateData(date),
      time,
      contact,
      userId: user.id,
      completed: false
    }

    handlePostAppointment(newData)
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
            <ComponentInput err={errors.contact}>
              {!!errors.contact ? (
                <label>{errors.contact.message}</label>
              ) : (
                <label>Telefone</label>
              )}
              <InputMask
                color={{ borderColor: errors.contact ? 'red' : '#777' }}
                mask='99 99999-9999'
                placeholder='Contato'
                {...register('contact')}
              />
            </ComponentInput>
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

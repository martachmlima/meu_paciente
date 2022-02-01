import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  Box,
  Flex
} from '@chakra-ui/react'
import InputComponent from '../input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FaTimes } from 'react-icons/fa'
import * as yup from 'yup'
import { useAuth } from '../../providers/AuthContext'
import { useVaccines } from '../../providers/VaccinesContext'

const addVaccinesSchema = yup.object().shape({
  type: yup.string().required('Campo obrigatório'),
  date: yup.string().required('Campo obrigatório'),
  nextshot: yup.string().required('Campo obrigatório')
})

export const ModalAddVaccines = ({ isOpen, onClose }) => {
  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm({
    resolver: yupResolver(addVaccinesSchema)
  })

  const { addVaccines } = useVaccines()

  const { user } = useAuth()

  const handleAddVaccines = data => {
    const { type, date, nextshot } = data
    const oldData = new Date(date)
    const newDate = oldData.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
    const oldNextshot = new Date(nextshot)
    const newNextshot = oldNextshot.toLocaleDateString('pt-BR', {
      timeZone: 'UTC'
    })
    const newData = {
      type,
      date: newDate,
      nextshot: newNextshot,
      userId: user.id,
      completed: false
    }

    addVaccines(newData)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as='form'
        onSubmit={handleSubmit(handleAddVaccines)}
        padding='2'
        bg='white'
        color='gray.200'
        alignItems='center'
        width={['95%', '100%']}>
        <ModalHeader
          display='flex'
          padding='2'
          borderBottom='2px solid'
          borderColor='gray.400'
          width='95%'
          mb='2'>
          <Flex alignItems='center' width='95%' justifyContent='space-between'>
            <Text fontWeight='500' color='gray.200'>
              Adicionar vacina
            </Text>
            <Box onClick={onClose} _hover={{ cursor: 'pointer' }}>
              <FaTimes color='whhite' />
            </Box>
          </Flex>
        </ModalHeader>

        <ModalBody width='100%' padding='2'>
          <VStack spacing='2'>
            <Box w='100%' paddingBottom='4'>
              <InputComponent
                errors={errors.type?.message}
                register={register}
                valueRegister='type'
                type='text'
                placeholder='Tipo'
              />
            </Box>
            <Box w='100%' paddingBottom='4'>
              <InputComponent
                errors={errors.date?.message}
                register={register}
                valueRegister='date'
                type='date'
                placeholder='Ultima dose'
              />
            </Box>
            <Box w='100%' paddingBottom='4'>
              <InputComponent
                errors={errors.nextshot?.message}
                register={register}
                valueRegister='nextshot'
                type='date'
                placeholder='Próxima dose'
              />
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter
          flexDirection='column'
          width='75%'
          pb='3'
          pl='2'
          pr='2'
          pt='0'>
          <Button
            type='submit'
            bg='blue.700'
            color='white'
            w='100%'
            h='60px'
            _hover={{ bg: 'blue.750' }}>
            Concluir
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

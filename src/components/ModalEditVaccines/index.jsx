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
  Box
} from '@chakra-ui/react'
import InputComponent from '../input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FaClipboard, FaTimes } from 'react-icons/fa'
import * as yup from 'yup'
import { useAuth } from '../../providers/AuthContext'
import { useVaccines } from '../../providers/VaccinesContext'

const editVaccinesSchema = yup.object().shape({
  type: yup.string().required('Campo obrigatório'),
  date: yup.string().required('Campo obrigatório'),
  nextshot: yup.string().required('Campo obrigatório')
})

export const ModalEditVaccines = ({ isOpen, onClose, id }) => {
  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm({
    resolver: yupResolver(editVaccinesSchema)
  })

  const { editVaccines } = useVaccines()

  const { user } = useAuth()

  const handleEditVaccines = data => {
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

    editVaccines(id, newData)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as='form'
        onSubmit={handleSubmit(handleEditVaccines)}
        padding='2'
        bg='white'
        color='gray.200'>
        <ModalHeader display='flex'>
          <Center bg='blue.700' w='30px' h='30px' borderRadius='5px'>
            <FaClipboard color='white' />
          </Center>
          <Text fontWeight='bold' ml='2'>
            Adicionar
          </Text>
          <Center
            onClick={onClose}
            as='button'
            ml='auto'
            w='32px'
            h='32px'
            bg='red.600'
            fontSize='lg'
            borderRadius='md'>
            <FaTimes color='whhite' />
          </Center>
        </ModalHeader>

        <ModalBody textAlign='center'>
          <VStack spacing='5'>
            <Box w='100%' paddingBottom='8'>
              <InputComponent
                errors={errors.type?.message}
                register={register}
                valueRegister='type'
                type='text'
                placeholder='Tipo'
              />
            </Box>
            <Box w='100%' paddingBottom='8'>
              <InputComponent
                errors={errors.date?.message}
                register={register}
                valueRegister='date'
                type='date'
                placeholder='Ultima dose'
              />
            </Box>
            <Box w='100%' paddingBottom='8'>
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

        <ModalFooter flexDirection='column'>
          <Button
            type='submit'
            bg='purple.500'
            color='white'
            w='100%'
            h='60px'
            _hover={{ bg: 'purple.600' }}>
            Editar medicamento
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

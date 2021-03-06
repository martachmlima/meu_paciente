import {
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
  Flex
} from '@chakra-ui/react'
import InputComponent from '../input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FaTimes } from 'react-icons/fa'
import * as yup from 'yup'
import { useAuth } from '../../providers/AuthContext'
import { useMedications } from '../../providers/MedicationsContext'
import Button from '../Button'

const editMedicationSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  frequency: yup.string().required('Campo obrigatório'),
  time: yup.string().required('Campo obrigatório'),
  function: yup.string().required('Campo obrigatório')
})

function ModalEditMedication({ isOpen, onClose, id }) {
  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm({
    resolver: yupResolver(editMedicationSchema)
  })

  const { editMedication } = useMedications()

  const { user } = useAuth()

  const handleEditMedication = data => {
    const newData = { ...data, userId: user.id }

    editMedication(id, newData)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as='form'
        onSubmit={handleSubmit(handleEditMedication)}
        borderRadius='8px'
        width={['95%', '100%']}
        padding='2'
        bg='white'
        color='gray.200'
        alignItems='center'>
        <ModalHeader
          display='flex'
          padding='2'
          borderBottom='2px solid'
          borderColor='gray.400'
          width='95%'
          mb='2'>
          <Flex alignItems='center' width='95%' justifyContent='space-between'>
            <Text fontWeight='500' color='gray.200'>
              Alterar Remédio
            </Text>
            <Center
              onClick={onClose}
              as='button'
              ml='auto'
              w='32px'
              h='32px'
              fontSize='lg'
              borderRadius='md'>
              <FaTimes color='whhite' />
            </Center>
          </Flex>
        </ModalHeader>

        <ModalBody textAlign='start' w='100%'>
          <VStack spacing='2'>
            <Box w='100%' paddingBottom='8'>
              <InputComponent
                label='Remédio'
                errors={errors.name?.message}
                register={register}
                valueRegister='name'
                type='name'
                placeholder='Remédio'
              />
            </Box>
            <Box w='100%' paddingBottom='8'>
              <InputComponent
                label='Frequência'
                errors={errors.frequency?.message}
                register={register}
                valueRegister='frequency'
                type='frequency'
                placeholder='Frequência'
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
                label='Função'
                errors={errors.function?.message}
                register={register}
                valueRegister='function'
                type='function'
                placeholder='Função'
              />
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter flexDirection='column'>
          <Box w='170%' h='40px'>
            <Button type='submit'>Alterar</Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalEditMedication

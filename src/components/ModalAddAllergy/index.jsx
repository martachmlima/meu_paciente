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
  Flex
} from '@chakra-ui/react'
import InputComponent from '../input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FaClipboard, FaTimes } from 'react-icons/fa'
import * as yup from 'yup'
import { useAuth } from '../../providers/AuthContext'
import { theme } from '../../styles/global'
import toast from 'react-hot-toast'

const addAllergySchema = yup.object().shape({
  title: yup.string().required('Campo obrigatório')
})

function ModalAddAllergy({ isOpen, onClose }) {
  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm({
    resolver: yupResolver(addAllergySchema)
  })

  const { addAllergy, user, accessToken } = useAuth()

  const handleAddAllergy = data => {
    const nRepeat = user.allergies.some(
      allergy => allergy.toLowerCase() === data.title.toLowerCase()
    )
    if (!nRepeat) {
      addAllergy(data.title, user.allergies, user.id, accessToken)
      onClose()
    } else {
      toast.error('Doença já adicionada')
    }
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
        onSubmit={handleSubmit(handleAddAllergy)}>
        <ModalHeader
          display='flex'
          padding='2'
          borderBottom='2px solid'
          borderColor='gray.400'
          width='95%'
          mb='2'>
          <Flex alignItems='center' width='95%' justifyContent='space-between'>
            <Text fontWeight='500' color='gray.200'>
              Adicionar alergia
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
                label='Nome da alergia'
                errors={errors.title?.message}
                register={register}
                valueRegister='title'
                type='text'
                placeholder='Alergia'
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

export default ModalAddAllergy

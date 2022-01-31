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
import { theme } from '../../styles/global'

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
      console.log('Alergia já adicionada')
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as='form'
        onSubmit={handleSubmit(handleAddAllergy)}
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
            <FaTimes color='white' />
          </Center>
        </ModalHeader>

        <ModalBody textAlign='center'>
          <VStack spacing='5'>
            <Box w='100%' paddingBottom='8'>
              <InputComponent
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
            bg={theme.colors.blue[500]}
            color='white'
            w='100%'
            h='60px'
            _hover={{ bg: `${theme.colors.blue[300]}` }}>
            Adicionar alergia
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalAddAllergy

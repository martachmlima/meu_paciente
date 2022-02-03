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
  Flex,
  Select
} from '@chakra-ui/react'
import InputComponent from '../input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FaTimes } from 'react-icons/fa'
import * as yup from 'yup'
import { useAuth } from '../../providers/AuthContext'
import Button from '../Button'
import { theme } from '../../styles/global'

const editeProfileSchema = yup.object().shape({
  // name: yup.string().required('Nome obrigatório'),
  age: yup.string().required('Idade obrigatória').max(3, 'Máximo 3 algarismos'),
  gender: yup.string().required('Informação obrigatória'),
  bloodtype: yup.string().required('Informação obrigatória'),
  weight: yup
    .string()
    .required('Campo obrigatório')
    .max(6, 'Máximo 3 caracteres'),
  height: yup
    .string()
    .required('Campo obrigatório')
    .max(6, 'Máximo 3 caracteres')
})

function ModalEditProfile({ isOpen, onClose }) {
  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm({
    resolver: yupResolver(editeProfileSchema)
  })

  const { user, editeProfile, accessToken } = useAuth()

  const handleEditProfile = data => {
    const newData = { ...data, userId: user.id }

    editeProfile(newData, user.id, accessToken)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xs'>
      <ModalOverlay />
      <ModalContent
        as='form'
        onSubmit={handleSubmit(handleEditProfile)}
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
              Edite seu perfil
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
            {/* <Box w='100%' paddingBottom='8'>
              <InputComponent
                label='Seu nome'
                errors={errors.name?.message}
                register={register}
                valueRegister='name'
                type='name'
                placeholder='Ex: Ana Maria'
              />
            </Box> */}
            <Box w='100%' paddingBottom='8'>
              <InputComponent
                label='Sua idade'
                errors={errors.age?.message}
                register={register}
                valueRegister='age'
                type='age'
                placeholder='Ex: 32'
              />
            </Box>
            <Box w='100%' paddingBottom='8'>
              <InputComponent
                label='Seu Peso em kg'
                errors={errors.weight?.message}
                register={register}
                valueRegister='weight'
                type='number'
                placeholder='Ex: 85'
              />
            </Box>
            <Box w='100%' paddingBottom='8'>
              <InputComponent
                label='Sua altura em cm'
                errors={errors.height?.message}
                register={register}
                valueRegister='height'
                type='number'
                placeholder='Ex: 165'
              />
            </Box>
            <Box color={errors.gender ? 'red' : 'grey'} w='100%'>
              <label>
                {errors.gender ? `${errors.gender.message}` : 'Sexo:'}
              </label>
              <Select
                bgColor={theme.colors.gray[900]}
                size='lg'
                color='gray'
                placeholder='Ex: Feminino'
                {...register('gender')}>
                <option value='male'>Masculino</option>
                <option value='female'>Feminino</option>
                <option value='others'>Outros</option>
                <option value='undisclosed'>Prefiro não dizer</option>
              </Select>
            </Box>
            <Box color={errors.bloodtype ? 'red' : 'grey'} w='100%'>
              <label>
                {errors.bloodtype
                  ? `${errors.bloodtype.message}`
                  : 'Tipo sanguíneo:'}
              </label>
              <Select
                bgColor={theme.colors.gray[900]}
                size='lg'
                color='gray'
                placeholder='Ex: A+'
                {...register('bloodtype')}>
                <option value='A+'>A+</option>
                <option value='A-'>A-</option>
                <option value='B+'>B+</option>
                <option value='B-'>B-</option>
                <option value='AB+'>AB+</option>
                <option value='AB-'>AB-</option>
                <option value='O+'>O+</option>
                <option value='O-'>O-</option>
                <option value='DoNotKnow'>Não sei</option>
              </Select>
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

export default ModalEditProfile

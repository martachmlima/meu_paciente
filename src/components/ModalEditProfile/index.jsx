import {
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
import Button from '../Button'
import { theme } from '../../styles/global'
import { useProfile } from '../../providers/ProfileContext'

const editProfileSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  gender: yup.string().required('Informação obrigatória'),
  bloodtype: yup.string().required('Informação obrigatória'),
  weight: yup
    .string()
    .required('Qual o seu peso?')
    .max(3, 'Máximo 3 algarismos'),
  height: yup.string().max(3, 'Máximo 3 algarismos')
})

export const ModalEditProfile = ({ isOpen, onClose, id, type }) => {
  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm({
    resolver: yupResolver(editProfileSchema)
  })

  const { editProfile } = useProfile()

  //   const { user } = useAuth()

  const handleEditProfile = data => {
    editProfile(data)
    onClose()
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as='form'
        onSubmit={handleSubmit(handleEditProfile)}
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
              Editar perfil
            </Text>
            <Box onClick={onClose} _hover={{ cursor: 'pointer' }}>
              <FaTimes />
            </Box>
          </Flex>
        </ModalHeader>

        <ModalBody width='100%' padding='2'>
          <VStack spacing='2' height='400px' justifyContent='space-evenly'>
            <Box
              w='100%'
              paddingBottom='4'
              boxSizing='border-box'
              height='80px'>
              <InputComponent
                errors={errors.name?.message}
                register={register}
                valueRegister='name'
                type='text'
                placeholder='Nome'
                label='Nome completo:'
              />
            </Box>
            <Box color={errors.gender ? 'red' : 'grey'} w='100%'>
              <label>
                {errors.gender ? `${errors.gender.message}` : 'Sexo'}
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
                  : 'Tipo sanguíneo'}
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
            <Box
              w='100%'
              paddingBottom='4'
              boxSizing='border-box'
              height='80px'>
              <InputComponent
                errors={errors.weight?.message}
                register={register}
                valueRegister='weight'
                type='number'
                placeholder='Peso'
                label='Peso atual?'
              />
            </Box>
            <Box
              w='100%'
              paddingBottom='4'
              boxSizing='border-box'
              height='80px'>
              <InputComponent
                errors={errors.height?.message}
                register={register}
                valueRegister='height'
                type='number'
                placeholder='Altura'
                label='Qual sua altura?'
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
          <Box
            w='100%'
            h='50px'
            fontFamily="'Roboto', sans-serif"
            fontSize='20px'>
            <Button type='submit'>Editar perfil</Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

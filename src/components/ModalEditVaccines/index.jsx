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
  Flex
} from '@chakra-ui/react'
import InputComponent from '../input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FaTimes } from 'react-icons/fa'
import * as yup from 'yup'
import { useAuth } from '../../providers/AuthContext'
import { useVaccines } from '../../providers/VaccinesContext'
import { FormateData } from '../../services/dateFormat'
import Button from '../Button'

const editVaccinesSchema = yup.object().shape({
  type: yup.string().required('Qual o tipo de  vacina?'),
  date: yup.string().required('Qual a data da ultima dose?'),
  nextshot: yup.string().required('Qual a data da próxima dose?')
})

export const ModalEditVaccines = ({ isOpen, onClose, id, type }) => {
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
    const newDate = FormateData(date)
    const newNextshot = FormateData(nextshot)
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
              Editar vacina
            </Text>
            <Box onClick={onClose} _hover={{ cursor: 'pointer' }}>
              <FaTimes />
            </Box>
          </Flex>
        </ModalHeader>

        <ModalBody width='100%' padding='2'>
          <VStack spacing='2' height='260px' justifyContent='space-evenly'>
            <Box
              w='100%'
              paddingBottom='4'
              boxSizing='border-box'
              height='80px'>
              <InputComponent
                errors={errors.type?.message}
                register={register}
                valueRegister='type'
                type='text'
                placeholder={type}
                label='Tipo da vacina:'
              />
            </Box>
            <Box
              w='100%'
              paddingBottom='4'
              boxSizing='border-box'
              height='80px'>
              <InputComponent
                errors={errors.date?.message}
                register={register}
                valueRegister='date'
                type='date'
                placeholder='Ultima dose'
                label='Ultima dose:'
              />
            </Box>
            <Box
              w='100%'
              paddingBottom='4'
              boxSizing='border-box'
              height='80px'>
              <InputComponent
                errors={errors.nextshot?.message}
                register={register}
                valueRegister='nextshot'
                type='date'
                placeholder='Próxima dose'
                label='Proxima dose:'
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
            <Button type='submit'>Adicionar vacina</Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalEditVaccines

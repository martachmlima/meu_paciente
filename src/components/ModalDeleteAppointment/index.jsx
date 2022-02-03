import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react'
import { FaTimes } from 'react-icons/fa'
import { useUser } from '../../providers/UserContext'

export const ModalDeleteAppointment = ({ isOpen, onClose, id }) => {
  const { handleAppointmentDelete } = useUser()
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
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
              Excluir Consulta
            </Text>
            <Box onClick={onClose} _hover={{ cursor: 'pointer' }}>
              <FaTimes />
            </Box>
          </Flex>
        </ModalHeader>
        <ModalBody textAlign='center'>
          <Text marginTop='4'>
            Tem certeza que deseja excluir esta Consulta?
          </Text>
        </ModalBody>

        <ModalFooter flexDirection='column'>
          <Button
            onClick={() => handleAppointmentDelete(id)}
            w='170%'
            h='40px'
            bg='red.600'
            borderRadius='3px'
            color='white'>
            Excluir
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

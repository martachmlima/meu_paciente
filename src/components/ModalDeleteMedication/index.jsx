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
import { FaTimes } from 'react-icons/fa'
import { useMedications } from '../../providers/MedicationsContext'

function ModalDeleteMedication({ isOpen, onClose, id }) {
  const { deleteMedication } = useMedications()

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        borderRadius='0'
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
              Excluir Remédio
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
        <Text marginTop='4'>Tem certeza que deseja excluir este remédio?</Text>
        <ModalBody textAlign='center'></ModalBody>

        <ModalFooter flexDirection='column'>
          <Button
            onClick={() => deleteMedication(id)}
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

export default ModalDeleteMedication

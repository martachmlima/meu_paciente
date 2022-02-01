import {
  HStack,
  Text,
  Center,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  ModalContent,
  VStack
} from '@chakra-ui/react'
import { MdOutlineLogout } from 'react-icons/md'
import LinkPage from './LinkPage'
import { useAuth } from '../../providers/AuthContext'

function ModalLink({ onClose, isOpen, actualPage }) {
  const { logOut } = useAuth()

  return (
    <Modal onClose={onClose} size='full' isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent position='absolute' right='0' width='200px'>
        <ModalHeader>
          Páginas
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <VStack>
            <LinkPage actualPage={actualPage} />
          </VStack>
        </ModalBody>
        <ModalFooter justifyContent='flex-start' p='24px 16px'>
          <HStack>
            <Center
              fontSize='50px'
              h='60px'
              w='50px'
              borderRadius='8px'
              bgColor='#e4605e'
              color='white'
              cursor='pointer'
              onClick={logOut}>
              <MdOutlineLogout />
            </Center>
            <Text>Sair agora</Text>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalLink

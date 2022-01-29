import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  VStack
} from '@chakra-ui/react'
import LinkPage from './LinkPage'

function ModalLink({ onClose, isOpen, actualPage }) {
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
      </ModalContent>
    </Modal>
  )
}

export default ModalLink

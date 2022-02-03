import { FaCheckCircle, FaTrash } from 'react-icons/fa'
import { Card, CardHeader, CompletedCheck, ContentBody, Divider } from './style'
import { ModalEditVaccines } from '../../components/ModalEditVaccines'
import { useDisclosure } from '@chakra-ui/react'
import { ModalDeleteVaccine } from '../ModalDeleteVaccines'

export const VaccinesCard = ({
  type,
  date,
  nextshot,
  id,
  complete,
  isCompleted
}) => {
  const {
    isOpen: modalEditIsOpen,
    onOpen: modalEditOnOpen,
    onClose: modalEditOnClose
  } = useDisclosure()
  const {
    isOpen: modalDeleteIsOpen,
    onOpen: modalDeleteOnOpen,
    onClose: modalDeleteOnClose
  } = useDisclosure()
  return (
    <>
      <Card>
        <CardHeader>
          <p>Tipo: {type}</p>
          <FaTrash onClick={modalDeleteOnOpen} />
          <CompletedCheck>
            {isCompleted ? (
              <FaCheckCircle size='25' onClick={complete} color='green' />
            ) : (
              <FaCheckCircle size='25' onClick={complete} />
            )}
          </CompletedCheck>
        </CardHeader>
        <Divider />
        <ContentBody onClick={modalEditOnOpen}>
          <p>Ultima dose: {date}</p>
          <p>Próxima dose: {nextshot}</p>
        </ContentBody>
      </Card>
      <ModalDeleteVaccine
        isOpen={modalDeleteIsOpen}
        onClose={modalDeleteOnClose}
        id={id}
      />
      <ModalEditVaccines
        isOpen={modalEditIsOpen}
        onClose={modalEditOnClose}
        id={id}
        type={type}
      />
    </>
  )
}

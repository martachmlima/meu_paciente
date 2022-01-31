import { FaTrash } from 'react-icons/fa'
import { Card, CardHeader, ContentBody } from './style'
import { ModalEditVaccines } from '../../components/ModalEditVaccines'
import { useDisclosure } from '@chakra-ui/react'

export const VaccinesCard = ({ type, date, nextshot, id, complete }) => {
  const {
    isOpen: modalEditIsOpen,
    onOpen: modalEditOnOpen,
    onClose: modalEditOnClose
  } = useDisclosure()
  return (
    <>
      <Card>
        <CardHeader>
          <p>Tipo: {type}</p> <FaTrash onClick={complete} />
        </CardHeader>
        <ContentBody onClick={modalEditOnOpen}>
          <p>Ultima dose: {date}</p>
          <p>Próxima dose: {nextshot}</p>
        </ContentBody>
      </Card>
      <ModalEditVaccines
        isOpen={modalEditIsOpen}
        onClose={modalEditOnClose}
        id={id}
        type={type}
      />
    </>
  )
}

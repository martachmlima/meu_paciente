import { FaTrash } from 'react-icons/fa'
import { Card, CardHeader } from './style'
import { ModalEditVaccines } from '../../components/ModalEditVaccines'
import { useDisclosure } from '@chakra-ui/react'
import { useVaccines } from '../../providers/VaccinesContext'

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
        <div onClick={modalEditOnOpen}>
          <p>Ultima dose: {date}</p>
          <p>Proxima dose: {nextshot}</p>
        </div>
      </Card>
      <ModalEditVaccines
        isOpen={modalEditIsOpen}
        onClose={modalEditOnClose}
        id={id}
      />
    </>
  )
}

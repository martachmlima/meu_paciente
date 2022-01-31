import { Card, CardHeader, Paragraphs } from './style'
import { FaTrash, FaCheck } from 'react-icons/fa'
import { useDisclosure } from '@chakra-ui/react'
import ModalEditMedication from '../ModalEditMedication'
import ModalDeleteMedication from '../ModalDeleteMedication'

function MedicationCard({ name, frequency, time, use, currentFunction, id }) {
  const {
    isOpen: isCreateTaskOpen,
    onOpen: onCreateTaskOpen,
    onClose: onCreateTaskClose
  } = useDisclosure()

  const {
    isOpen: isDeleteMedicationOpen,
    onOpen: onDeleteMedicationOpen,
    onClose: onDeleteMedicationClose
  } = useDisclosure()
  return (
    <>
      <Card>
        <CardHeader>
          <p>Remédio: {name}</p> <FaTrash onClick={onDeleteMedicationOpen} />
          <FaCheck onClick={currentFunction} />
        </CardHeader>
        <Paragraphs onClick={onCreateTaskOpen}>
          <p>Frequência: {frequency}</p>
          <p>Horário: {time}</p>
          <p>Função: {use}</p>
        </Paragraphs>
      </Card>
      <ModalEditMedication
        isOpen={isCreateTaskOpen}
        onClose={onCreateTaskClose}
        id={id}
      />
      <ModalDeleteMedication
        isOpen={isDeleteMedicationOpen}
        onClose={onDeleteMedicationClose}
        id={id}
      />
    </>
  )
}

export default MedicationCard

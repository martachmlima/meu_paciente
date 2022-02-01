import { Card, CardHeader, CompletedCheck, ContentBody, Divider } from './style'
import { FaTrash, FaCheckCircle } from 'react-icons/fa'
import { useDisclosure } from '@chakra-ui/react'
import ModalEditMedication from '../ModalEditMedication'
import ModalDeleteMedication from '../ModalDeleteMedication'

function MedicationCard({
  name,
  frequency,
  time,
  use,
  id,
  completed,
  isCompleted
}) {
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
          <p>Remédio: {name}</p>
          <FaTrash onClick={onDeleteMedicationOpen} />
          <CompletedCheck>
            {isCompleted ? (
              <FaCheckCircle size='25' onClick={completed} color='green' />
            ) : (
              <FaCheckCircle size='25' onClick={completed} />
            )}
          </CompletedCheck>
        </CardHeader>
        <Divider />
        <ContentBody onClick={onCreateTaskOpen}>
          <p>Frequência: {frequency}</p>
          <p>Horário: {time}</p>
          <p>Função: {use}</p>
        </ContentBody>
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

import { useDisclosure } from '@chakra-ui/react'
import { FaCheckCircle, FaTrash } from 'react-icons/fa'
import { useUser } from '../../providers/UserContext'

import { ModalDeleteAppointment } from '../ModalDeleteAppointment'
import ModalEditAppointments from '../ModalEditAppointment'
import {
  Card,
  CardHeader,
  CompletedCheck,
  Divider,
  Paragraphs
} from './style'

function CardAppointment({ obj }) {
  const { handleAppointmentCompleted } = useUser()
  const {
    isOpen: modalDeleteIsOpen,
    onOpen: modalDeleteOnOpen,
    onClose: modalDeleteOnClose
  } = useDisclosure()
  const {
    isOpen: modalEditIsOpen,
    onOpen: modalEditOnOpen,
    onClose: modalEditOnClose
  } = useDisclosure()

  return (
    <>
      <Card>
        <CardHeader>
          <p>Doutor: {obj.doctor}</p>
          <FaTrash onClick={modalDeleteOnOpen} />

          <CompletedCheck>
            {obj.completed ? (
              <FaCheckCircle
                size='25'
                onClick={() =>
                  handleAppointmentCompleted(obj.id, obj.completed)
                }
                color='green'
              />
            ) : (
              <FaCheckCircle
                size='25'
                onClick={() =>
                  handleAppointmentCompleted(obj.id, obj.completed)
                }
              />
            )}
          </CompletedCheck>
        </CardHeader>
        <Divider />

        <Paragraphs onClick={modalEditOnOpen}>
          <p>Data: {obj.date}</p>
          <p>Horário: {obj.time}</p>
          <p>Contato: {obj.contact}</p>
        </Paragraphs>
      </Card>
      <ModalDeleteAppointment
        isOpen={modalDeleteIsOpen}
        onClose={modalDeleteOnClose}
        id={obj.id}
      />
      <ModalEditAppointments
        isOpen={modalEditIsOpen}
        onClose={modalEditOnClose}
        obj={obj}
      />
    </>
  )
}
export default CardAppointment

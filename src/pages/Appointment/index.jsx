import CardAppointment from '../../components/cardAppointment'
import Header from '../../components/Header'
import ModalAppointments from '../../components/ModalAppointment'
import { useUser } from '../../providers/UserContext'
import { CardBox, Title, ButtonAppointment, HistoricSelector } from './style'
import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import Button from '../../components/Button'

function Appointment() {
  const { appointment } = useUser()
  const [filed, setFiled] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <Header actualPage='Consultas' />

      <ModalAppointments isOpen={isOpen} onClose={onClose} />
      <ButtonAppointment>
        <Button onClick={onOpen}>Adicionar Consulta</Button>
      </ButtonAppointment>
      <HistoricSelector>
        <p onClick={() => setFiled(false)}>Ativos</p>
        <p onClick={() => setFiled(true)}>Histórico</p>
      </HistoricSelector>

      {!filed ? (
        <CardBox>
          {appointment
            .filter(item => !item.completed)
            .map((obj, index) => (
              <div key={index}>
                <CardAppointment obj={obj} />
              </div>
            ))}
        </CardBox>
      ) : (
        <CardBox>
          {appointment
            .filter(item => item.completed)
            .map((obj, index) => (
              <div key={index}>
                <CardAppointment del obj={obj} />
              </div>
            ))}
        </CardBox>
      )}
    </div>
  )
}
export default Appointment

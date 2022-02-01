import CardAppointment from '../../components/cardAppointment'
import Header from '../../components/Header'
import ModalAppointments from '../../components/ModalAppointment'
import { useUser } from '../../providers/UserContext'
import { CardBox } from './style'

function Appointment() {
  const { appointment } = useUser()

  return (
    <div>
      <Header actualPage='Consultas' />
      <ModalAppointments />
      <CardBox>
        {appointment
          .filter(item => !item.completed)
          .map((obj, index) => (
            <div key={index}>
              <CardAppointment obj={obj} />
            </div>
          ))}
      </CardBox>
    </div>
  )
}
export default Appointment

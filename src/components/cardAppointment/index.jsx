import { FaCheck } from 'react-icons/fa'
import { useUser } from '../../providers/UserContext'
import { CardHeader, Conteiner, Paragraphs } from './style'

function CardAppointment({ obj }) {
  const { handleAppointmentCompleted } = useUser()
  return (
    <>
      {
        <Conteiner>
          <CardHeader>
            <p>Doutor: {obj.doctor}</p>
            <FaCheck onClick={() => handleAppointmentCompleted(obj.id)} />
          </CardHeader>
          <Paragraphs>
            <p>Data: {obj.date}</p>
            <p>Horário: {obj.time}</p>
            <p>Contato: {obj.contact}</p>
          </Paragraphs>
        </Conteiner>
      }
    </>
  )
}
export default CardAppointment

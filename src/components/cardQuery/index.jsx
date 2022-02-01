import { FaCheck } from 'react-icons/fa'
import { useUser } from '../../providers/UserContext'
import { CardHeader, Conteiner, Paragraphs } from './style'

function CardQuery({ obj }) {
  const { handleQueryCompleted } = useUser()
  return (
    <>
      {
        <Conteiner>
          <CardHeader>
            <p>Doutor: {obj.doctor}</p>
            <FaCheck onClick={() => handleQueryCompleted(obj.id)} />
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
export default CardQuery

import { useUser } from '../../providers/UserContext'
import { Conteiner } from './style'

const CardQuery = ({ obj }) => {
  const { handleQueryCompleted } = useUser()
  return (
    <>
      {
        <Conteiner>
          <button onClick={() => handleQueryCompleted(obj.id)}>teste</button>
          <p>Doutor: {obj.doctor}</p>
          <p>Data: {obj.date}</p>
          <p>Horário: {obj.time}</p>
          <p>Contato: {obj.contact}</p>
        </Conteiner>
      }
    </>
  )
}
export default CardQuery

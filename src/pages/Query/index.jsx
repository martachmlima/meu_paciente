import CardQuery from '../../components/cardQuery'
import Header from '../../components/Header'
import { CardHeader } from '../../components/MedicationCard/style'
import { useUser } from '../../providers/UserContext'
import { CardBox } from './style'

function Query() {
  const { query } = useUser()

  return (
    <div>
      <Header actualPage='Consultas' />
      <CardHeader />

      <button onClick={() => console.log('abrir modal')}>
        Adicionar Consulta
      </button>

      <CardBox>
        {query
          .filter(item => !item.completed)
          .map((obj, index) => (
            <div key={index}>
              <CardQuery obj={obj} />
            </div>
          ))}
      </CardBox>
    </div>
  )
}
export default Query

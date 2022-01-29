import { useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useAuth } from '../../providers/AuthContext'
import { useVaccines } from '../../providers/VaccinesContext'
import ModalAddVaccines from '../../components/ModalAddVaccines'
import VaccinesCard from '../../components/VaccinesCard'
import Header from '../../components/Header'

function Vaccines() {
  const { vaccines, getVaccines, completeVaccines } = useVaccines()
  const { accessToken } = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    getVaccines(accessToken)
  })
  return (
    <>
      <Header actualPage='Vacinas' />
      <div>
        <ModalAddVaccines isOpen={isOpen} onClose={onClose} />
        <button onClick={onOpen}>Adicionar vacinas</button>
        {vaccines.map(items => (
          <div key={items.id}>
            {!items.completed && (
              <VaccinesCard
                type={items.type}
                date={items.date}
                nextshot={items.nextshot}
                id={items.id}
                complete={() => completeVaccines(items.id)}
              />
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default Vaccines

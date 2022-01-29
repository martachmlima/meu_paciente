import { useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'
import { ModalAddVaccines } from '../../components/ModalAddVaccines'
import { VaccinesCard } from '../../components/VaccinesCard'
import { useAuth } from '../../providers/AuthContext'
import { useVaccines } from '../../providers/VaccinesContext'

export const Vaccines = () => {
  const { vaccines, getVaccines, completeVaccines } = useVaccines()
  const { accessToken } = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    getVaccines(accessToken)
  })
  return (
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
  )
}

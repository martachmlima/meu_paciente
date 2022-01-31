import { useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { ModalAddVaccines } from '../../components/ModalAddVaccines'
import { VaccinesCard } from '../../components/VaccinesCard'
import { useAuth } from '../../providers/AuthContext'
import { useVaccines } from '../../providers/VaccinesContext'
import { BoxCard, ButtonVaccine, HistoricSelector } from './style'
import Header from '../../components/Header'
import Button from '../../components/Button'

export const Vaccines = () => {
  const { vaccines, getVaccines, completeVaccines, incompleteVaccines } =
    useVaccines()
  const { accessToken, logOut } = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [showHistoric, setShowHistoric] = useState(false)
  useEffect(() => {
    getVaccines(accessToken)
  })
  return (
    <div>
      <Header actualPage='Vacinas' />

      <ModalAddVaccines isOpen={isOpen} onClose={onClose} />
      <ButtonVaccine>
        <Button onClick={onOpen}>Adicionar vacinas</Button>
      </ButtonVaccine>
      <HistoricSelector>
        <p onClick={() => setShowHistoric(false)}>Ativos</p>{' '}
        <p onClick={() => setShowHistoric(true)}>Histórico</p>
      </HistoricSelector>
      <BoxCard>
        {showHistoric ? (
          <>
            {vaccines
              .filter(item => item.completed)
              .map(items => (
                <div key={items.id}>
                  <VaccinesCard
                    type={items.type}
                    date={items.date}
                    nextshot={items.nextshot}
                    id={items.id}
                    complete={() => incompleteVaccines(items.id)}
                    isCompleted={items.completed}
                  />
                </div>
              ))}
          </>
        ) : (
          <>
            {vaccines
              .filter(item => !item.completed)
              .map(items => (
                <div key={items.id}>
                  <VaccinesCard
                    type={items.type}
                    date={items.date}
                    nextshot={items.nextshot}
                    id={items.id}
                    complete={() => completeVaccines(items.id)}
                  />
                </div>
              ))}
          </>
        )}
      </BoxCard>
      <ButtonVaccine>
        <Button onClick={logOut}>sair</Button>
      </ButtonVaccine>
    </div>
  )
}

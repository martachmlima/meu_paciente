import { useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { ModalAddVaccines } from '../../components/ModalAddVaccines'
import { VaccinesCard } from '../../components/VaccinesCard'
import { useAuth } from '../../providers/AuthContext'
import { useVaccines } from '../../providers/VaccinesContext'
import {
  BoxCard,
  ButtonVaccine,
  HistoricSelector,
  VaccinesEmpty
} from './style'
import Header from '../../components/Header'
import Button from '../../components/Button'
import Add from '../../assets/add.svg'
import { RiFolderAddLine } from 'react-icons/ri'
import { MdArchive } from 'react-icons/md'

export const Vaccines = () => {
  const { vaccines, getVaccines, completeVaccines, incompleteVaccines } =
    useVaccines()
  const { accessToken } = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [showHistoric, setShowHistoric] = useState(false)
  useEffect(() => {
    getVaccines(accessToken)
  })
  const allCompleted = vaccines.filter(item => item.completed)
  const allActive = vaccines.filter(item => !item.completed)
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
      {vaccines.length === 0 ? (
        <VaccinesEmpty>
          <img src={Add} alt='add' />
          <p>Nenhuma vacina cadastrada</p>
        </VaccinesEmpty>
      ) : (
        <BoxCard>
          {showHistoric ? (
            <>
              {allCompleted.length === 0 ? (
                <VaccinesEmpty>
                  <MdArchive size='25' />
                  <p>Nenhuma vacina arquivada</p>
                </VaccinesEmpty>
              ) : (
                allCompleted.map(items => (
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
                ))
              )}
            </>
          ) : (
            <>
              {allActive.length === 0 ? (
                <VaccinesEmpty>
                  <RiFolderAddLine size='25' />
                  <p>Nenhuma vacina ativa</p>
                </VaccinesEmpty>
              ) : (
                allActive.map(items => (
                  <div key={items.id}>
                    <VaccinesCard
                      type={items.type}
                      date={items.date}
                      nextshot={items.nextshot}
                      id={items.id}
                      complete={() => completeVaccines(items.id)}
                    />
                  </div>
                ))
              )}
            </>
          )}
        </BoxCard>
      )}
    </div>
  )
}

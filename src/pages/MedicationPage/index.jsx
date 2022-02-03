import { useEffect, useState } from 'react'
import { Box, useDisclosure } from '@chakra-ui/react'
import { Flex, Text, Image } from '@chakra-ui/react'
import MedicationCard from '../../components/MedicationCard'
import ModalAddMedication from '../../components/ModalAddMedication'
import Header from '../../components/Header'
import { useMedications } from '../../providers/MedicationsContext'
import { useAuth } from '../../providers/AuthContext'
import Add from '../../assets/add.svg'
import Button from '../../components/Button'
import { MdArchive } from 'react-icons/md'
import { RiFolderAddLine } from 'react-icons/ri'
import { HistoricSelector, Paragraph } from './style'

function MedicationPage() {
  const {
    getMedications,
    medications,
    completeMedication,
    incompleteMedication
  } = useMedications()
  const { accessToken } = useAuth()
  const {
    isOpen: isCreateTaskOpen,
    onOpen: onCreateTaskOpen,
    onClose: onCreateTaskClose
  } = useDisclosure()

  useEffect(() => {
    getMedications(accessToken)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [whatToShow, setWhatToShow] = useState('active')

  const showActive = () => {
    setWhatToShow('active')
  }

  const showHistory = () => {
    setWhatToShow('history')
  }

  const allCompleted = medications.filter(item => item.completed)

  const allActive = medications.filter(item => !item.completed)

  return (
    <>
      <Header actualPage='Remédios' />
      <Flex direction='column' alignItems={['center', 'center', 'start']}>
        <Box
          width='240px'
          height='50px'
          margin='10px 0 5px 10px'
          fontSize='20px'>
          <Button onClick={onCreateTaskOpen}>Adicionar Remédio</Button>
        </Box>
        <Flex w='100%' justifyContent='center'>
          <HistoricSelector>
            {whatToShow === 'active' ? (
              <>
                {' '}
                <Paragraph focus onClick={showActive}>
                  Ativos
                </Paragraph>
                <Paragraph onClick={showHistory}>Histórico</Paragraph>
              </>
            ) : (
              <>
                {' '}
                <Paragraph onClick={showActive}>Ativos</Paragraph>
                <Paragraph focus onClick={showHistory}>
                  Histórico
                </Paragraph>
              </>
            )}
          </HistoricSelector>
        </Flex>
        {medications.length === 0 ? (
          <Flex alignItems='center' justifyContent='center' w='100%' h='300px'>
            <Box boxSize='200px' color='blue.600'>
              <Image sizes='md' src={Add} />
            </Box>
            <Text fontSize={['md', '2xl']}>Nenhum remédio cadastrado</Text>
          </Flex>
        ) : (
          <Flex wrap='wrap'>
            {whatToShow === 'active' ? (
              <>
                {allActive.length === 0 ? (
                  <Flex
                    h={['30vh', '50vh']}
                    alignItems='center'
                    justifyContent='center'
                    width='100vw'
                    fontSize={['lg', '3xl']}>
                    <RiFolderAddLine />
                    <Text ml='4'>Nenhum remédio ativo</Text>
                  </Flex>
                ) : (
                  <>
                    {allActive.map(medication => (
                      <MedicationCard
                        id={medication.id}
                        key={medication.id}
                        name={medication.name}
                        frequency={medication.frequency}
                        time={medication.time}
                        use={medication.function}
                        isCompleted={medication.completed}
                        completed={() => completeMedication(medication.id)}
                      />
                    ))}{' '}
                  </>
                )}
              </>
            ) : (
              <>
                {allCompleted.length === 0 ? (
                  <Flex
                    h={['30vh', '50vh']}
                    alignItems='center'
                    justifyContent='center'
                    width='100vw'
                    fontSize={['lg', '3xl']}>
                    <MdArchive />
                    <Text ml='4'>Nenhum remédio arquivado</Text>
                  </Flex>
                ) : (
                  <>
                    {allCompleted.map(medication => (
                      <MedicationCard
                        id={medication.id}
                        key={medication.id}
                        name={medication.name}
                        frequency={medication.frequency}
                        time={medication.time}
                        use={medication.function}
                        isCompleted={medication.completed}
                        completed={() => incompleteMedication(medication.id)}
                      />
                    ))}
                  </>
                )}
              </>
            )}
          </Flex>
        )}

        <ModalAddMedication
          isOpen={isCreateTaskOpen}
          onClose={onCreateTaskClose}
        />
      </Flex>
    </>
  )
}

export default MedicationPage

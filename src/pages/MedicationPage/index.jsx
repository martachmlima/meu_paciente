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
  }, [])

  const [whatToShow, setWhatToShow] = useState('active')

  const showActive = () => {
    setWhatToShow('active')
  }

  const showHistory = () => {
    setWhatToShow('history')
  }

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
          <Flex
            mb='4'
            alignItems='center'
            justifyContent='space-between'
            w={['90%', '43%']}>
            <Text
              fontSize={['20px', '3xl']}
              cursor='pointer'
              onClick={showActive}>
              Ativos
            </Text>
            <Text
              fontSize={['20px', '3xl']}
              cursor='pointer'
              onClick={showHistory}>
              Histórico
            </Text>
          </Flex>
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
                {medications
                  .filter(item => !item.completed)
                  .map(medication => (
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
                  ))}
              </>
            ) : (
              <>
                {medications
                  .filter(item => item.completed)
                  .map(medication => (
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

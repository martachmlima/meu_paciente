import { useEffect, useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { Button, Flex, Text } from '@chakra-ui/react'
import MedicationCard from '../../components/MedicationCard'
import ModalAddMedication from '../../components/ModalAddMedication'
import Header from '../../components/Header'
import { useMedications } from '../../providers/MedicationsContext'
import { useAuth } from '../../providers/AuthContext'

function MedicationPage() {
  const { getMedications, medications, completeMedication } = useMedications()
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
      <Flex
        padding='20px'
        direction='column'
        alignItems={['center', 'center', 'start']}>
        <Button
          w={['70%', '50%', '17%']}
          padding='4'
          borderRadius='3'
          mt='6'
          bgColor='blue.750'
          color='white'
          _hover={{ bg: 'blue.300 ' }}
          onClick={onCreateTaskOpen}
          marginBottom='20px'>
          Adicionar Remédio
        </Button>
        <Flex mb='4' alignItems='center' justifyContent='center' w='100%'>
          <Text
            pr='3'
            borderRight='2px solid'
            fontSize={['md', '3xl']}
            cursor='pointer'
            onClick={showActive}>
            Ativos
          </Text>
          <Text
            pl='3'
            fontSize={['md', '3xl']}
            cursor='pointer'
            onClick={showHistory}>
            Histórico
          </Text>
        </Flex>
        {medications.length === 0 ? (
          <Flex alignItems='center' justifyContent='center' w='100%' h='300px'>
            <Text fontSize={['md', '2xl']}>Nenhum remédio cadastrado</Text>
          </Flex>
        ) : (
          <Flex
            justifyContent='space-evenly'
            alignItems='center'
            w='98%'
            wrap='wrap'>
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
                      currentFunction={() => completeMedication(medication.id)}
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
                      completed={medication.completed}
                      currentFunction={() => completeMedication(medication.id)}
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

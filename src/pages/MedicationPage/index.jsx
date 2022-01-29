import MedicationCard from '../../components/MedicationCard'
import { useMedications } from '../../providers/MedicationsContext'
import { useAuth } from '../../providers/AuthContext'
import { useEffect } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { ModalAddMedication } from '../../components/ModalAddMedication'
import { Container } from './style'
import { Button, Flex } from '@chakra-ui/react'

const MedicationPage = () => {
  const { getMedications, medications, completeMedication } = useMedications()
  const { accessToken, user } = useAuth()
  const {
    isOpen: isCreateTaskOpen,
    onOpen: onCreateTaskOpen,
    onClose: onCreateTaskClose
  } = useDisclosure()

  useEffect(() => {
    getMedications(accessToken)
  }, [])

  return (
    <Flex
      padding='20px'
      direction='column'
      alignItems={['center', 'center', 'start']}>
      <Button
        w={['70%', '50%', '25%']}
        padding='4'
        borderRadius='3'
        mt='6'
        bgColor='blue.750'
        color='white'
        _hover={{ bg: 'blue.300 ' }}
        onClick={onCreateTaskOpen}
        marginBottom='20px'>
        Adicionar Medicação
      </Button>
      <Flex
        justifyContent='space-evenly'
        alignItems='center'
        w='98%'
        wrap='wrap'>
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
      </Flex>
      <ModalAddMedication
        isOpen={isCreateTaskOpen}
        onClose={onCreateTaskClose}
      />
    </Flex>
  )
}

export default MedicationPage

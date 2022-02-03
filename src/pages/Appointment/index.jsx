import CardAppointment from '../../components/cardAppointment'
import Header from '../../components/Header'
import ModalAppointments from '../../components/ModalAppointment'
import { useUser } from '../../providers/UserContext'
import { CardBox, ButtonAppointment, HistoricSelector } from './style'
import { useState } from 'react'
import { Box, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'
import Button from '../../components/Button'
import Add from '../../assets/add.svg'
import { RiFolderAddLine } from 'react-icons/ri'
import { MdArchive } from 'react-icons/md'

function Appointment() {
  const { appointment } = useUser()
  const [filed, setFiled] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const allActived = appointment.filter(item => !item.completed)
  const allCompleted = appointment.filter(item => item.completed)

  return (
    <div>
      <Header actualPage='Consultas' />
      <ModalAppointments isOpen={isOpen} onClose={onClose} />
      <ButtonAppointment>
        <Button onClick={onOpen}>Adicionar Consulta</Button>
      </ButtonAppointment>
      <HistoricSelector>
        <p onClick={() => setFiled(false)}>Ativos</p>
        <p onClick={() => setFiled(true)}>Histórico</p>
      </HistoricSelector>
      {appointment.length === 0 ? (
        <Flex alignItems='center' justifyContent='center' w='100%' h='300px'>
          <Box boxSize='200px' color='blue.600'>
            <Image sizes='md' src={Add} />
          </Box>
          <Text fontSize={['md', '2xl']}>Nenhuma consulta cadastrada</Text>
        </Flex>
      ) : (
        <>
          {!filed ? (
            <CardBox>
              {allActived.length === 0 ? (
                <Flex
                  h={['30vh', '50vh']}
                  alignItems='center'
                  justifyContent='center'
                  width='100vw'
                  fontSize={['lg', '3xl']}>
                  <RiFolderAddLine />
                  <Text ml='4'>Nenhuma consulta ativa</Text>
                </Flex>
              ) : (
                <>
                  {allActived.map((obj, index) => (
                    <div key={index}>
                      <CardAppointment obj={obj} />
                    </div>
                  ))}
                </>
              )}
            </CardBox>
          ) : (
            <CardBox>
              {allCompleted.length === 0 ? (
                <Flex
                  h={['30vh', '50vh']}
                  alignItems='center'
                  justifyContent='center'
                  width='100vw'
                  fontSize={['lg', '3xl']}>
                  <MdArchive />
                  <Text ml='4'>Nenhuma consulta arquivada</Text>
                </Flex>
              ) : (
                <>
                  {allCompleted.map((obj, index) => (
                    <div key={index}>
                      <CardAppointment obj={obj} />
                    </div>
                  ))}
                </>
              )}
            </CardBox>
          )}
        </>
      )}
    </div>
  )
}
export default Appointment

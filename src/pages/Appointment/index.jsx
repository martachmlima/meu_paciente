import CardAppointment from '../../components/cardAppointment'
import Header from '../../components/Header'
import ModalAppointments from '../../components/ModalAppointment'
import { useUser } from '../../providers/UserContext'
import { CardBox, Conteiner, Title } from './style'
import { useState } from 'react'
import { Box, Button } from '@chakra-ui/react'

function Appointment() {
  const { appointment } = useUser()
  const [filed, setFiled] = useState(false)

  return (
    <div>
      <Header actualPage='Consultas' />
      <Conteiner>
        <ModalAppointments />
        <Box w='300px' m='24px auto'>
          <Button
            bg='blue.700'
            color='white'
            w='100%'
            h='60px'
            _hover={{ bg: 'blue.750' }}
            onClick={() => setFiled(!filed)}>
            Ativos | Arquivados
          </Button>
        </Box>
      </Conteiner>
      {!filed ? (
        <>
          <Title>Ativas</Title>
          <CardBox>
            {appointment
              .filter(item => !item.completed)
              .map((obj, index) => (
                <div key={index}>
                  <CardAppointment obj={obj} />
                </div>
              ))}
          </CardBox>
        </>
      ) : (
        <>
          <Title>Arquivadas</Title>
          <CardBox>
            {appointment
              .filter(item => item.completed)
              .map((obj, index) => (
                <div key={index}>
                  <CardAppointment del obj={obj} />
                </div>
              ))}
          </CardBox>
        </>
      )}
    </div>
  )
}
export default Appointment

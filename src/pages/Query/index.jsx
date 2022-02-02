import CardQuery from '../../components/cardQuery'
import Header from '../../components/Header'
import ModalAppointments from '../../components/ModalAppointment'
import { useUser } from '../../providers/UserContext'
import { CardBox } from './style'
import { Box, Button, useDisclosure } from '@chakra-ui/react'

function Query() {
  const { query } = useUser()

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <ModalAppointments isOpen={isOpen} onClose={onClose} />
      <Header actualPage='Consultas' />
      <Box w='300px' m='0 auto' padding='12'>
        <Button
          bg='blue.700'
          color='white'
          w='100%'
          h='60px'
          _hover={{ bg: 'blue.750' }}
          onClick={onOpen}>
          Adicionar Consulta
        </Button>
      </Box>
      <CardBox>
        {query
          .filter(item => !item.completed)
          .map((obj, index) => (
            <div key={index}>
              <CardQuery obj={obj} />
            </div>
          ))}
      </CardBox>
    </div>
  )
}
export default Query

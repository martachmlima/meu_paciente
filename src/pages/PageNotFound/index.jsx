import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react'
import { useHistory } from 'react-router'
import NotFoundImg from '../../assets/warning.svg'
import Button from '../../components/Button'

const PageNotFound = () => {
  const history = useHistory()
  return (
    <Flex
      padding={['10px 15px', '10 15px', '0px', '0px']}
      alignItems='center'
      justifyContent='space-evenly'
      height={['auto', 'auto', '100vh', '100vh']}
      flexDirection={['column-reverse', 'column-reverse', 'row', 'row']}>
      <Box mt='4'>
        <Heading>Oooops!</Heading>
        <Text mt='4'>
          Não encontramos a página que você procurou, <br />
          <b>vamos tentar novamente.</b>
        </Text>
        <Box mt='4' h='60px' w='100%'>
          <Button bolder onClick={() => history.push('/profile')}>
            Ir para meu perfil
          </Button>
        </Box>
      </Box>
      <Flex direction='column'>
        <Image h='400px' src={NotFoundImg} />
        <Flex
          w='100%'
          alignItems='center'
          justifyContent='center'
          fontSize='2xl'
          mt='8'>
          <Text>Página não encontrada!</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default PageNotFound

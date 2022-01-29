import {
  Box,
  Flex,
  Image,
  Text,
  HStack,
  Heading,
  Button,
  useMediaQuery
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { theme } from '../../styles/global'
import { useAuth } from '../../providers/AuthContext'
import CardAllergies from './CardAllergies'
import CardIllnesses from './CardIllnesses'

function Profile() {
  const { user, addAllergy, addDisease, accessToken, allergiesAndIllnesses } =
    useAuth()

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  useEffect(() => {
    console.log(allergiesAndIllnesses)
  }, [allergiesAndIllnesses])

  return (
    <Box p={['4', '8', '12', '16']}>
      <Flex
        p={['4px', '8px 4px', '12px 8px', '16px 12px']}
        borderBottom={`2px solid ${theme.colors.gray[300]}`}
        flexDirection={isLargerThan800 ? 'row' : 'column'}
        alignItems='center'
        justifyContent='center'>
        <Image
          borderRadius='full'
          boxSize='150px'
          src='https://picsum.photos/150'
          objectFit='cover'
          alt='profile'
        />
        <Flex
          flexDirection={isLargerThan800 ? 'row' : 'column'}
          flexWrap='wrap'
          fontWeight='bold'
          color={theme.colors.gray[200]}
          fontSize={['4xl', '4xl', '2xl', '2xl']}
          justifyContent='space-around'
          w='100%'>
          <Box>
            Nome Completo: <br />
            <Text
              p='0 10px'
              minWidth='200px'
              fontWeight='normal'
              fontSize={['2xl', '2xl', 'xl', 'xl']}>
              {user.name}
            </Text>
          </Box>
          <Box>
            Idade: <br />
            <Text
              p='0 10px'
              minWidth='200px'
              fontWeight='normal'
              fontSize={['2xl', '2xl', 'xl', 'xl']}>
              {user.age}
            </Text>
          </Box>
          <Box>
            Altura: <br />
            <Text
              p='0 10px'
              minWidth='200px'
              fontWeight='normal'
              fontSize={['2xl', '2xl', 'xl', 'xl']}>
              {user.height}
            </Text>
          </Box>
          <Box>
            Peso: <br />
            <Text
              p='0 10px'
              minWidth='200px'
              fontWeight='normal'
              fontSize={['2xl', '2xl', 'xl', 'xl']}>
              {user.weight}
            </Text>
          </Box>
          <Box>
            Tipo Sanguíneo: <br />
            <Text
              p='0 10px'
              minWidth='200px'
              fontWeight='normal'
              fontSize={['2xl', '2xl', 'xl', 'xl']}>
              {user.bloodtype}
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Flex
        w='100%'
        flexDirection={isLargerThan800 ? 'row' : 'column'}
        justifyContent='space-around'
        p={['4', '4', '8', '8']}>
        <Box
          w={isLargerThan800 ? '48%' : '100%'}
          color={theme.colors.gray[900]}
          bgColor={theme.colors.blue[750]}
          minHeight={'200px'}
          borderRadius='8'
          p={'4'}
          marginBottom={isLargerThan800 ? '0px' : '12px'}>
          <HStack
            justifyContent='space-between'
            marginBottom='4'
            paddingBottom='3'
            borderBottom={`2px solid ${theme.colors.gray[900]}`}>
            <Heading>Alergias</Heading>
            <Button
              bgColor={theme.colors.blue[700]}
              _hover={{
                background: `${theme.colors.blue[300]}`
              }}
              //função de adicionar teste para o modal
              onClick={() =>
                addAllergy('teste', user.allergies, user.id, accessToken)
              }
              //
            >
              +
            </Button>
          </HStack>
          <Flex flexDirection='column' w='100%'>
            {allergiesAndIllnesses.allergies.map(allergy => (
              <CardAllergies key={allergy} allergy={allergy} />
            ))}
          </Flex>
        </Box>
        <Box
          w={isLargerThan800 ? '48%' : '100%'}
          color={theme.colors.gray[900]}
          bgColor={theme.colors.blue[750]}
          minHeight={'200px'}
          borderRadius='8'
          p={'4'}>
          <HStack
            justifyContent='space-between'
            marginBottom='4'
            paddingBottom='3'
            borderBottom={`2px solid ${theme.colors.gray[900]}`}>
            <Heading>Doenças</Heading>
            <Button
              bgColor={theme.colors.blue[700]}
              _hover={{
                background: `${theme.colors.blue[300]}`
              }}
              //função de adicionar teste para o modal
              onClick={() =>
                addDisease('testedoenca', user.illnesses, user.id, accessToken)
              }
              //
            >
              +
            </Button>
          </HStack>
          <Flex flexDirection='column' w='100%'>
            {allergiesAndIllnesses.illnesses.map(disease => (
              <CardIllnesses key={disease} disease={disease} />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Profile

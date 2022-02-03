import {
  Box,
  Flex,
  Image,
  Text,
  HStack,
  Heading,
  Button,
  useMediaQuery,
  useDisclosure
} from '@chakra-ui/react'
import { theme } from '../../styles/global'
import { useAuth } from '../../providers/AuthContext'
import { FiEdit } from 'react-icons/fi'
import CardAllergies from './CardAllergies'
import CardIllnesses from './CardIllnesses'
import Header from '../../components/Header'
import ModalAddDisease from '../../components/ModalAddDisease'
import ModalAddAllergy from '../../components/ModalAddAllergy'
import ModalEditeProfile from '../../components/ModalEditProfile'

function Profile() {
  const { user, allergiesAndIllnesses } = useAuth()

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  const {
    isOpen: isAddDiseaseOpen,
    onOpen: onAddDiseaseOpen,
    onClose: onAddDiseaseClose
  } = useDisclosure()

  const {
    isOpen: isAddAllergyOpen,
    onOpen: onAddAllergyOpen,
    onClose: onAddAllergyClose
  } = useDisclosure()

  const {
    isOpen: isEditeProfileOpen,
    onOpen: onEditeProfileOpen,
    onClose: onEditeProfileClose
  } = useDisclosure()
  console.log(user)
  return (
    <>
      <ModalEditeProfile
        isOpen={isEditeProfileOpen}
        onClose={onEditeProfileClose}
      />
      <ModalAddDisease isOpen={isAddDiseaseOpen} onClose={onAddDiseaseClose} />
      <ModalAddAllergy isOpen={isAddAllergyOpen} onClose={onAddAllergyClose} />
      <Header actualPage='Meu Perfil' />
      <Box p={['12px 16px', '16px 32px', '24px 48px', '32px 64px']}>
        <Flex
          p={['4px', '8px 4px', '12px 8px', '16px 12px']}
          borderBottom={`2px solid ${theme.colors.gray[300]}`}
          flexDirection={isLargerThan800 ? 'row' : 'column'}
          alignItems='center'
          position='relative'
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
            <Flex alignItems='center'>
              Nome:
              <Text
                p='0 10px'
                minWidth='200px'
                fontWeight='normal'
                fontSize={['2xl', '2xl', 'xl', 'xl']}>
                {user.name}
              </Text>
            </Flex>
            <Flex alignItems='center'>
              Idade:
              <Text
                p='0 10px'
                minWidth='200px'
                fontWeight='normal'
                fontSize={['2xl', '2xl', 'xl', 'xl']}>
                {user.age}
              </Text>
            </Flex>
            <Flex alignItems='center'>
              Altura:
              <Text
                p='0 10px'
                minWidth='200px'
                fontWeight='normal'
                fontSize={['2xl', '2xl', 'xl', 'xl']}>
                {user.height}
              </Text>
            </Flex>
            <Flex alignItems='center'>
              Peso:
              <Text
                p='0 10px'
                minWidth='200px'
                fontWeight='normal'
                fontSize={['2xl', '2xl', 'xl', 'xl']}>
                {user.weight}
              </Text>
            </Flex>
            <Flex alignItems='center'>
              Tipo Sanguíneo:
              <Text
                p='0 10px'
                minWidth='200px'
                fontWeight='normal'
                fontSize={['2xl', '2xl', 'xl', 'xl']}>
                {user.bloodtype}
              </Text>
            </Flex>
          </Flex>
          <Flex
            position='absolute'
            top='0'
            right='0'
            fontSize='3xl'
            onClick={onEditeProfileOpen}
            _hover={{ color: 'red' }}>
            <FiEdit />
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
                onClick={onAddAllergyOpen}>
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
                onClick={onAddDiseaseOpen}>
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
    </>
  )
}

export default Profile

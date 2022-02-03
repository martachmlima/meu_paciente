import {
  Box,
  Flex,
  Image,
  Text,
  HStack,
  Heading,
  useMediaQuery,
  useDisclosure
} from '@chakra-ui/react'
import { theme } from '../../styles/global'
import { useAuth } from '../../providers/AuthContext'
import CardAllergies from './CardAllergies'
import CardIllnesses from './CardIllnesses'
import Header from '../../components/Header'
import ModalAddDisease from '../../components/ModalAddDisease'
import ModalAddAllergy from '../../components/ModalAddAllergy'
import Button from '../../components/Button'
import { ModalEditProfile } from '../../components/ModalEditProfile'
import { useProfile } from '../../providers/ProfileContext'
import { useEffect } from 'react'

function Profile() {
  const { allergiesAndIllnesses } = useAuth()
  const { user, attProfile } = useProfile()
  const [isLargerThan1900] = useMediaQuery('(min-width: 1900px)')

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
    isOpen: isEditProfileOpen,
    onOpen: onEditProfileOpen,
    onClose: onEditProfileClose
  } = useDisclosure()

  useEffect(() => {
    attProfile()
  })

  return (
    <>
      <ModalAddDisease isOpen={isAddDiseaseOpen} onClose={onAddDiseaseClose} />
      <ModalAddAllergy isOpen={isAddAllergyOpen} onClose={onAddAllergyClose} />
      <ModalEditProfile
        isOpen={isEditProfileOpen}
        onClose={onEditProfileClose}
      />
      <Header actualPage='Meu Perfil' />
      <Box p={['12px 16px', '16px 32px', '24px 48px', '32px 64px']}>
        <Flex
          p={['4px', '8px 4px', '12px 8px', '16px 12px']}
          borderBottom={`2px solid ${theme.colors.gray[300]}`}
          flexDirection={['column', 'row']}
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
            flexDirection={['column', 'column', 'column', 'column']}
            flexWrap='wrap'
            fontWeight='bold'
            color={theme.colors.gray[200]}
            justifyContent='space-around'
            height={['200px', '200px', '200px', '110px', '100px']}
            alignContent={['center', 'flex-start']}
            marginLeft={['0', '50px']}
            w='100%'>
            <Flex alignItems='center'>
              <Heading as='h3' fontSize={['2xl', '2xl', '3xl', '3xl']}>
                Nome:
              </Heading>
              <Text
                p='0 10px'
                minWidth='150px'
                fontWeight='normal'
                fontSize={['xl', 'xl', '2xl', '2xl']}>
                {user.name}
              </Text>
            </Flex>
            <Flex alignItems='center'>
              <Heading as='h3' fontSize={['2xl', '2xl', '3xl', '3xl']}>
                Idade:
              </Heading>
              <Text
                p='0 10px'
                minWidth='150px'
                fontWeight='normal'
                fontSize={['xl', 'xl', '2xl', '2xl']}>
                {' '}
                {user.age}
              </Text>
            </Flex>
            <Flex alignItems='center'>
              <Heading as='h3' fontSize={['2xl', '2xl', '3xl', '3xl']}>
                Altura:
              </Heading>
              <Text
                p='0 10px'
                minWidth='150px'
                fontWeight='normal'
                fontSize={['xl', 'xl', '2xl', '2xl']}>
                {' '}
                {user.height} cm
              </Text>
            </Flex>
            <Flex alignItems='center'>
              <Heading as='h3' fontSize={['2xl', '2xl', '3xl', '3xl']}>
                Peso:
              </Heading>
              <Text
                p='0 10px'
                minWidth='150px'
                fontWeight='normal'
                fontSize={['xl', 'xl', '2xl', '2xl']}>
                {' '}
                {user.weight} Kg
              </Text>
            </Flex>
            <Flex alignItems='center'>
              <Heading as='h3' fontSize={['2xl', '2xl', '3xl', '3xl']}>
                Sangue:
              </Heading>
              <Text
                p='0 10px'
                minWidth='150px'
                fontWeight='normal'
                fontSize={['xl', 'xl', '2xl', '2xl']}>
                {' '}
                {user.bloodtype}
              </Text>
            </Flex>
          </Flex>
          <Flex
            h='50px'
            w={['150px', '350px']}
            fontSize={['xl', '2xl']}
            m='3'
            onClick={onEditProfileOpen}>
            <Button>Editar perfil</Button>
          </Flex>
        </Flex>

        <Flex
          w='100%'
          flexDirection={['column', 'row']}
          justifyContent='space-around'
          p={['4', '4', '8', '8']}>
          <Box
            w={['100%', '48%']}
            color={theme.colors.gray[900]}
            bgColor={theme.colors.blue[750]}
            minHeight={'200px'}
            borderRadius='8'
            p={'4'}
            marginBottom={['12px', '0px']}>
            <HStack
              justifyContent='space-between'
              marginBottom='4'
              paddingBottom='3'
              borderBottom={`2px solid ${theme.colors.gray[900]}`}>
              <Heading>Alergias</Heading>
              <Box w='41px' h='40px'>
                <Button onClick={onAddAllergyOpen}>+</Button>
              </Box>
            </HStack>
            <Flex flexDirection='column' w='100%'>
              {allergiesAndIllnesses.allergies.map(allergy => (
                <CardAllergies key={allergy} allergy={allergy} />
              ))}
            </Flex>
          </Box>
          <Box
            w={['100%', '48%']}
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
              <Box w='41px' h='40px'>
                <Button onClick={onAddDiseaseOpen}>+</Button>
              </Box>
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

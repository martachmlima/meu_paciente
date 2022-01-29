import {
  Flex,
  Center,
  Heading,
  HStack,
  VStack,
  useMediaQuery,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader
} from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import { theme } from '../../styles/global'
import { GrMenu } from 'react-icons/gr'
import LinkPage from './LinkPage'
import ModalLink from './ModalLink'

function Header({ actualPage }) {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <ModalLink onClose={onClose} isOpen={isOpen} actualPage={actualPage} />
      <Flex
        w='100%'
        h='80px'
        bgColor={theme.colors.blue[800]}
        p='0px 5%'
        justifyContent='space-between'
        alignItems='center'>
        <Heading
          as='h1'
          fontSize='2xl'
          fontWeight='normal'
          color={theme.colors.gray[200]}>
          +Saúde
        </Heading>
        {isLargerThan800 ? (
          <HStack>
            <LinkPage actualPage={actualPage} />
          </HStack>
        ) : (
          <Center fontSize='3xl' onClick={onOpen} cursor='pointer'>
            <GrMenu />
          </Center>
        )}
      </Flex>
    </>
  )
}

export default Header

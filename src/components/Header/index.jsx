import {
  Flex,
  Center,
  Heading,
  HStack,
  useMediaQuery,
  useDisclosure
} from '@chakra-ui/react'
import { theme } from '../../styles/global'
import { GrMenu } from 'react-icons/gr'
import { MdOutlineLogout } from 'react-icons/md'
import LinkPage from './LinkPage'
import ModalLink from './ModalLink'
import { useAuth } from '../../providers/AuthContext'

function Header({ actualPage }) {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { logOut } = useAuth()

  return (
    <>
      <ModalLink onClose={onClose} isOpen={isOpen} actualPage={actualPage} />
      <Flex
        w='100%'
        h='80px'
        bgColor={theme.colors.blue[800]}
        p='0px 0px 0px 5%'
        justifyContent='space-between'
        alignItems='center'
        boxShadow='md'>
        <Heading
          as='h1'
          fontSize='2xl'
          fontWeight='normal'
          color={theme.colors.gray[200]}>
          +Saúde
        </Heading>
        {isLargerThan800 ? (
          <HStack h='100%'>
            <LinkPage actualPage={actualPage} />
            <Center
              fontSize='50px'
              h='100%'
              w='70px'
              marginLeft='5vw'
              bgColor='#e4605e'
              color='white'
              cursor='pointer'
              onClick={logOut}>
              <MdOutlineLogout />
            </Center>
          </HStack>
        ) : (
          <Center
            fontSize='3xl'
            onClick={onOpen}
            cursor='pointer'
            marginRight='5vw'>
            <GrMenu />
          </Center>
        )}
      </Flex>
    </>
  )
}

export default Header

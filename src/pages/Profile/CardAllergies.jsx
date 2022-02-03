import { HStack, Text } from '@chakra-ui/react'
import { theme } from '../../styles/global'
import { GoDiffRemoved } from 'react-icons/go'
import { useAuth } from '../../providers/AuthContext'

function CardAllergies({ allergy }) {
  const { user, accessToken, removeAllergy } = useAuth()

  return (
    <HStack
      _hover={{
        background: `${theme.colors.blue[500]}`
      }}
      marginBottom='4'
      cursor='pointer'
      bgColor={theme.colors.blue[700]}
      color={theme.colors.gray[900]}
      borderRadius='12'
      w='100%'
      p='4'
      justifyContent='space-between'>
      <Text>{allergy}</Text>
      <Text
        fontSize='28px'
        cursor='pointer'
        onClick={() =>
          removeAllergy(allergy, user.allergies, user.id, accessToken)
        }
        color={theme.colors.gray[900]}
        _hover={{ color: `${theme.colors.red[600]}` }}>
        <GoDiffRemoved />
      </Text>
    </HStack>
  )
}

export default CardAllergies

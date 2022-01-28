import { HStack, Text } from '@chakra-ui/react'
import { theme } from '../../styles/global'

function CardIllnesses({ disease }) {
  return (
    <HStack
      _hover={{
        background: `${theme.colors.blue[500]}`
      }} 
      marginBottom='4'
      cursor='pointer'
      bgColor={theme.colors.blue[700]} 
      color={theme.colors.gray[900]} 
      borderRadius='12' w='100%' p='4'
      justifyContent='space-between' 
    >
      <Text>{disease}</Text>
    </HStack>
  )
}

export default CardIllnesses
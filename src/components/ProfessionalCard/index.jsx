import { theme } from '../../styles/global'
import { Box, HStack, Heading, Flex, Text } from '@chakra-ui/react'

const ProfessionalCard = ({ name, specialties, contact, address }) => {
  return (
    <Box
      w={['300px', '400px']}
      color={theme.colors.gray[900]}
      bgColor={theme.colors.blue[750]}
      minHeight={'200px'}
      borderRadius='8'
      p={'4'}
      marginBottom={['0px', '12px']}>
      <HStack
        justifyContent='space-between'
        marginBottom='4'
        paddingBottom='3'
        borderBottom={`2px solid ${theme.colors.gray[900]}`}>
        <Heading fontSize='2xl'>{name}</Heading>
      </HStack>
      <Flex flexDirection='column'>
        <Text fontSize={['md', 'xl']}>Especialidades: {specialties}</Text>
        <Text fontSize={['md', 'xl']}>Contato: {contact}</Text>
        <Text fontSize={['md', 'xl']}>Endereço: {address}</Text>
      </Flex>
    </Box>
  )
}

export default ProfessionalCard

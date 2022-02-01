import { theme } from '../../styles/global'
import {
  Box,
  HStack,
  Heading,
  Flex,
  Text,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import { MdCircle } from 'react-icons/md'

const ProfessionalCard = ({
  name,
  specialties,
  contact,
  street,
  city,
  clinic
}) => {
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
        <Text fontWeight='600' fontSize={['md', 'xl']}>
          {clinic}
        </Text>
        <List fontSize={['md', 'xl']}>
          <ListItem>Especialidades:</ListItem>
          {specialties.map(spec => (
            <Flex ml='8' alignItems='center'>
              <ListIcon as={MdCircle} fontSize='md' />
              <ListItem>{spec}</ListItem>
            </Flex>
          ))}
        </List>
        <Text fontSize={['md', 'xl']}>Contato: {contact}</Text>
        <Text fontSize={['md', 'xl']}>Endereço: {street}</Text>
        <Text fontSize={['md', 'xl']}>Cidade: {city}</Text>
      </Flex>
    </Box>
  )
}

export default ProfessionalCard

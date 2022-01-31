import { Grid, VStack, Heading, Text, Image } from '@chakra-ui/react'
import SVG from '../../assets/medical.svg'
import { theme } from '../../styles/global'

function LoginInfo() {
  return (
    <Grid
      w={['100%', '100%', '80%', '80%']}
      display={['none', 'none', 'flex', 'flex']}
      paddingRight={['50px', '50px', '80px', '100px']}
      alignItems='flex-start'
      flexDirection='row'>
      <VStack>
        <VStack alignItems='flex-start'>
          <Heading
            fontSize={['xl', 'xl', '3xl', '3xl']}
            color={theme.colors.gray[200]}
            mt='4'
            as='h1'>
            +Saude
          </Heading>
          <Text
            fontStyle='italic'
            fontSize={['md', 'md', 'xl', 'xl']}
            color={theme.colors.gray[200]}
            maxW='350px'>
            Gerencie sua saúde <br /> com facilidade e <br /> praticidade.
          </Text>
        </VStack>
        <Image src={SVG} />
      </VStack>
    </Grid>
  )
}

export default LoginInfo

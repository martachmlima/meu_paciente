import { Grid, VStack, Heading, Text, Image } from '@chakra-ui/react'
import SVG from '../../assets/doctors_1.svg'

function SignUpInfo() {
  return (
    <Grid
      w={['100%', '100%', '80%', '80%']}
      h={['290px', '300px', '330px', '410px', '500px']}
      display='flex'
      paddingRight={['50px', '50px', '80px', '100px']}
      alignItems={['center', 'flex-start']}
      justifyContent='center'
      flexDirection='row'>
      <VStack alignItems='center'>
        <VStack alignItems='flex-start'>
          <Heading
            fontSize={['4xl', '4xl', '3xl', '3xl']}
            color='#434343'
            mt='4'
            as='h1'>
            +Saude
          </Heading>
          <Text
            fontStyle='italic'
            fontSize={['2xl', '2xl', 'xl', 'xl']}
            color='#434343'
            maxW='350px'>
            Gerencie sua saúde <br />
            com facilidade e <br />
            praticidade.
          </Text>
        </VStack>
        <Image display={['none', 'block']} src={SVG} />
      </VStack>
    </Grid>
  )
}

export default SignUpInfo

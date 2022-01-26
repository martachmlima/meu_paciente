import { Grid, VStack, Heading, Text } from '@chakra-ui/react'

function LoginInfo() {

  return (
    <Grid w={["100%", "100%", "60%", "60%"]}
      display={['none', 'none', 'flex', 'flex']} paddingRight={['50px', '50px', '80px', '100px']} alignItems='flex-start' flexDirection='row' >
      <VStack alignItems='flex-start'>
        <Heading fontSize={['xl', '2xl', '5xl', '5xl']}  color='#000' mt="4" as="h1">
          +Saude
        </Heading>
        <Text fontWeight='bold' fontStyle='italic' fontSize={['md', 'md', 'xl', 'xl']} color='#000' maxW="350px">
          Gerencie sua saúde com facilidade e praticidade.
        </Text>
      </VStack>
    </Grid>
  )
}

export default LoginInfo
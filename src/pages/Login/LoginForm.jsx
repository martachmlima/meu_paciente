import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import InputComponent from '../../components/input'
import { useHistory } from 'react-router-dom'

function LoginForm({ handleSubmit, errors, register }) {
  const history = useHistory()

  return (
    <Grid
      onSubmit={handleSubmit}
      as='form'
      padding='30px 15px'
      borderRadius='8'
      bg='#BAD5F3'
      mt={['4', '4', '0']}
      w={['100%', '100%', '50%', '50%']}
      maxWidth='500px'
      mixWidth='350px'
    >
      <Heading textAlign='center' color='#434343' size="lg">Login</Heading>
      <VStack mt="6" spacing="5">
        <Box w="100%" paddingBottom='8' >
          <InputComponent
            errors={errors.email?.message}
            register={register}
            valueRegister='email'
            type='email'
            placeholder='Email'
          />
        </Box>
        <Box w="100%"paddingBottom='8'>
          <InputComponent
            errors={errors.password?.message}
            register={register}
            valueRegister='password'
            type='password'
            placeholder='Senha'
          />
        </Box>
      </VStack>
      <VStack mt="4" spacing="5">
        <Button
          bg="#8FB7E3"
          color="#F8F7F7"
          w="100%"
          h="60px"
          borderRadius="8px"
          _hover={{
            background: "#3F3D56",
          }}
          type="submit"
        >
          Entrar
        </Button>
        <Text color="#555">Ainda não possui uma conta? </Text>
        <Button
          bg="#0968C0"
          w="100%"
          color="#F8F7F7"
          h="60px"
          borderRadius="8px"
          onClick={() => history.push("/signup")}
          _hover={{
            background: "#3F3D56",
          }}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  )
}

export default LoginForm
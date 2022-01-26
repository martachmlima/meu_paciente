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
      border='3px solid'
      borderColor='#555'
      bg='white'
      color='#000'
      mt={['4', '4', '0']}
      w={['100%', '100%', '40%', '40%']}
      maxWidth='500px'
    >
      <Heading size="lg"> Bem vindo de volta!</Heading>
      <VStack mt="6" spacing="5">
        <Box w="100%" paddingBottom='8' >
          <InputComponent
            label='Email'
            errors={errors.email?.message}
            register={register}
            valueRegister='email'
            type='email'
          />
        </Box>
        <Box w="100%"paddingBottom='8'>
          <InputComponent
            label='Senha'
            errors={errors.password?.message}
            register={register}
            valueRegister='password'
            type='password'
          />
        </Box>
      </VStack>
      <VStack mt="4" spacing="5">
        <Button
          bg="#444"
          w="100%"
          color="#ddd"
          h="60px"
          borderRadius="8px"
          _hover={{
            background: "#000",
          }}
          type="submit"
        >
          Entrar
        </Button>
        <Text color="#555">Ainda não possui uma conta? </Text>
        <Button
          bg="#444"
          w="100%"
          color="#ddd"
          h="60px"
          borderRadius="8px"
          onClick={() => history.push("/signup")}
          _hover={{
            background: "#000",
          }}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  )
}

export default LoginForm
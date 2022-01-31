import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import InputComponent from '../../components/input'
import { useHistory } from 'react-router-dom'
import { theme } from '../../styles/global'

function LoginForm({ handleSubmit, errors, register }) {
  const history = useHistory()

  return (
    <Grid
      onSubmit={handleSubmit}
      as='form'
      padding='30px 15px'
      borderRadius='8'
      bg={theme.colors.blue[800]}
      mt={['4', '4', '0']}
      w={['100%', '100%', '50%', '50%']}
      maxWidth='500px'
      minWidth='350px'>
      <Heading textAlign='center' color={theme.colors.gray[200]} size='lg'>
        Login
      </Heading>
      <VStack mt='6' spacing='5'>
        <Box w='100%' paddingBottom='8'>
          <InputComponent
            label='E-mail'
            errors={errors.email?.message}
            register={register}
            valueRegister='email'
            type='email'
            placeholder='Email'
          />
        </Box>
        <Box w='100%' paddingBottom='8'>
          <InputComponent
            label='Senha'
            errors={errors.password?.message}
            register={register}
            valueRegister='password'
            type='password'
            placeholder='Senha'
          />
        </Box>
      </VStack>
      <VStack mt='4' spacing='5'>
        <Button
          bg={theme.colors.blue[700]}
          color={theme.colors.gray[900]}
          w='100%'
          h='60px'
          borderRadius='8px'
          _hover={{
            background: `${theme.colors.blue[300]}`
          }}
          type='submit'>
          Entrar
        </Button>
        <Text color={theme.colors.gray[200]}>Ainda não possui uma conta? </Text>
        <Button
          bg={theme.colors.blue[500]}
          w='100%'
          color={theme.colors.gray[900]}
          h='60px'
          borderRadius='8px'
          onClick={() => history.push('/signup')}
          _hover={{
            background: `${theme.colors.blue[300]}`
          }}>
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  )
}

export default LoginForm

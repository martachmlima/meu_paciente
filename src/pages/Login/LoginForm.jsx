import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import InputComponent from '../../components/input'
import { useHistory } from 'react-router-dom'
import { theme } from '../../styles/global'
import Button from '../../components/Button'

function LoginForm({ handleSubmit, errors, register }) {
  const history = useHistory()

  return (
    <Grid
      onSubmit={handleSubmit}
      as='form'
      padding='30px 15px'
      borderRadius={['0', '8']}
      bg={theme.colors.blue[800]}
      mt={['4', '4', '0']}
      w={['100%', '100%', '50%', '50%']}
      maxWidth='500px'
      minWidth='320px'
      h={['600px', '500px']}>
      <Heading
        h='50px'
        textAlign='center'
        color={theme.colors.gray[200]}
        fontSize={['3xl', '2xl']}>
        Login
      </Heading>
      <VStack spacing='5' justifyContent='space-evenly'>
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
      <VStack mt='4' spacing='5' justifyContent='space-around'>
        <Box w='100%' h='60px'>
          <Button type='submit' bolder>
            Entrar
          </Button>
        </Box>

        <Text color={theme.colors.gray[200]}>
          Não possui conta?
          <Text
            color='blue.500'
            as='span'
            _hover={{ cursor: 'pointer' }}
            onClick={() => history.push('/signup')}>
            {' '}
            Cadastre-se!
          </Text>
        </Text>
      </VStack>
    </Grid>
  )
}

export default LoginForm

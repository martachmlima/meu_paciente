import { Box, Button, Flex, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from '../../providers/AuthContext'
import InputComponent from '../../components/input'
import { useHistory } from 'react-router-dom'

function Login() {
  const { signUp } = useAuth()
  const history = useHistory()
  
  const signInSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória').min(6, 'Minimo de 6 caracteres'),
  })

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signInSchema),
  })

  return (
    <Flex
      padding={["10px 15px", "10 15px", "0px", "0px"]}
      alignItems="center"
      justifyContent="center"
      height={["auto", "auto", "100vh", "100vh"]}
      bgColor='#fff'
      color="#000"
    >
      <Flex
        w={["100%", "100%", "90%", "65%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
        <Grid
          onSubmit={handleSubmit(signUp)}
          as='form'
          padding='30px 15px'
          border='3px solid'
          borderColor='#555'
          bg='white'
          color='#000'
          mt={['4', '4', '0']}
          w={['100%', '100%', '40%', '40%']}
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
              h="40px"
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
              h="40px"
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
      </Flex>
    </Flex>
  )
}

export default Login
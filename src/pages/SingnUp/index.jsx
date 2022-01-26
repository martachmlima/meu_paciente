import { Box, Button, Flex, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import InputComponent from '../../components/input'
import { useHistory, Link } from 'react-router-dom'
import { api } from '../../services'

function SingnUp() {
  const history = useHistory()
  
  const signUpSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória").min(6, 'Minimo de 6 caracteres'),
    confirm_password: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  })

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  })

  const handleSignup = (data) => {
    const { name, email, password } = data
    api
      .post("/register", { 
        name, 
        email, 
        password,
        age: undefined,
        weight: undefined,
        height: undefined,
        gender: undefined,
        bloodtype: undefined,
      })
      .then((response) => {
        console.log('Usuário cadastrado')
        history.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
          onSubmit={handleSubmit(handleSignup)}
          as='form'
          padding='30px 15px'
          border='3px solid'
          borderColor='#555'
          bg='white'
          color='#000'
          mt={['4', '4', '0']}
          w={['100%', '100%', '40%', '40%']}
        >
          <Heading size="lg">Olá, Bem vindo</Heading>
          <VStack mt="6" spacing="5">
            <Box w="100%"paddingBottom='8'>
              <InputComponent
                label='Nome'
                errors={errors.name?.message}
                register={register}
                valueRegister='name'
                type='text'
              />
            </Box>
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
            <Box w="100%"paddingBottom='8'>
              <InputComponent
                label='Confirme sua senha'
                errors={errors.confirm_password?.message}
                register={register}
                valueRegister='confirm_password'
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
              Cadastrar
            </Button>
            <Text color="#555">Já é cadastrado? Faça seu <Link to='/'>Login</Link> </Text>
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  )
}

export default SingnUp
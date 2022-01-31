import { Flex, useMediaQuery } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from '../../providers/AuthContext'
import LoginForm from './LoginForm'
import LoginInfo from './LoginInfo'

function Login() {
  const { signUp } = useAuth()
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  const signInSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup
      .string()
      .required('Senha obrigatória')
      .min(6, 'Minimo de 6 caracteres')
  })

  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm({
    resolver: yupResolver(signInSchema)
  })

  return (
    <Flex
      minHeight='100vh'
      padding={['10px 15px', '10 15px', '0px', '0px']}
      alignItems='center'
      justifyContent='center'
      height={['auto', 'auto', '100vh', '100vh']}
      bgColor='#fff'
      color='#000'>
      <Flex
        w={['100%', '100%', '90%', '75%']}
        justifyContent='center'
        flexDirection={['column', 'column', 'row', 'row']}
        alignItems='center'>
        {isLargerThan800 && <LoginInfo />}
        <LoginForm
          handleSubmit={handleSubmit(signUp)}
          errors={errors}
          register={register}
        />
      </Flex>
    </Flex>
  )
}

export default Login

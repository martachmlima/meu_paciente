import { Flex } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from 'react-router-dom'
import { api } from '../../services'
import SignUpForm from './SignUpForm'
import SignUpInfo from './SignUpInfo'
import toast from 'react-hot-toast'

function SingnUp() {
  const history = useHistory()

  const signUpSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup
      .string()
      .required('Senha obrigatória')
      .min(6, 'Minimo de 6 caracteres'),
    confirm_password: yup
      .string()
      .required('Confirmação de senha obrigatória')
      .oneOf([yup.ref('password')], 'Senhas diferentes'),
    age: yup
      .string()
      .required('Idade obrigatória')
      .max(3, 'Máximo 3 algarismos')
    // gender: yup.string().required('Informação obrigatória'),
    // bloodtype: yup.string().required('Informação obrigatória')
  })

  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm({
    resolver: yupResolver(signUpSchema)
  })

  const handleSignup = data => {
    const newData = {
      name: data.name,
      email: data.email,
      password: data.password,
      age: data.age,
      gender: '',
      bloodtype: '',
      weight: '',
      height: '',
      allergies: [],
      illnesses: []
    }
    api
      .post('/register', newData)
      .then(response => {
        toast.success('Usuário cadastrado')
        history.push('/login')
      })
      .catch(err => {
        toast.error('Usuário já cadastrado')
      })
  }

  return (
    <Flex
      margin={['0', '0', '20px 0', '10px']}
      minHeight='100vh'
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
        <SignUpInfo />
        <SignUpForm
          hSubmit={handleSubmit(handleSignup)}
          errors={errors}
          register={register}
        />
      </Flex>
    </Flex>
  )
}

export default SingnUp

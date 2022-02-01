import { Box, Grid, Heading, Select, Text, VStack } from '@chakra-ui/react'
import InputComponent from '../../components/input'
import { theme } from '../../styles/global'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button'
function SignUpForm({ hSubmit, errors, register }) {
  const history = useHistory()

  return (
    <Grid
      onSubmit={hSubmit}
      as='form'
      padding=' 30px 15px'
      borderRadius={['0', '8']}
      bg={theme.colors.blue[800]}
      mt={['4', '4', '0']}
      w={['100%', '100%', '50%', '50%']}
      maxWidth='500px'
      minWidth='320px'
      h='800px'>
      <Heading textAlign='center' color={theme.colors.gray[200]} size='lg'>
        Bem vindo!
      </Heading>
      <VStack spacing='5' justifyContent='space-evenly'>
        <Box w='100%' paddingBottom='4'>
          <InputComponent
            label='Nome:'
            errors={errors.name?.message}
            register={register}
            valueRegister='name'
            type='text'
            placeholder='Ex: Dom Kenzo Segundo'
          />
        </Box>
        <Box w='100%' paddingBottom='4'>
          <InputComponent
            label='E-mail:'
            errors={errors.email?.message}
            register={register}
            valueRegister='email'
            type='email'
            placeholder='Ex: fulano@mail.com'
          />
        </Box>
        <Box w='100%' paddingBottom='4'>
          <InputComponent
            label='Senha:'
            errors={errors.password?.message}
            register={register}
            valueRegister='password'
            type='password'
          />
        </Box>
        <Box w='100%' paddingBottom='4'>
          <InputComponent
            label='Confirme sua senha:'
            errors={errors.confirm_password?.message}
            register={register}
            valueRegister='confirm_password'
            type='password'
          />
        </Box>
        <Box w='100%' paddingBottom='4'>
          <InputComponent
            label='Idade:'
            errors={errors.age?.message}
            register={register}
            valueRegister='age'
            type='number'
            placeholder='Ex: 32'
          />
        </Box>
        <Box color={errors.gender ? 'red' : 'grey'} w='100%'>
          <label>{errors.gender ? `${errors.gender.message}` : 'Sexo:'}</label>
          <Select
            bgColor={theme.colors.gray[900]}
            size='lg'
            color='gray'
            placeholder='Ex: Feminino'
            {...register('gender')}>
            <option value='male'>Masculino</option>
            <option value='female'>Feminino</option>
            <option value='others'>Outros</option>
            <option value='undisclosed'>Prefiro não dizer</option>
          </Select>
        </Box>
        <Box color={errors.bloodtype ? 'red' : 'grey'} w='100%'>
          <label>
            {errors.bloodtype
              ? `${errors.bloodtype.message}`
              : 'Tipo sanguíneo:'}
          </label>
          <Select
            bgColor={theme.colors.gray[900]}
            size='lg'
            color='gray'
            placeholder='Ex: A+'
            {...register('bloodtype')}>
            <option value='A+'>A+</option>
            <option value='A-'>A-</option>
            <option value='B+'>B+</option>
            <option value='B-'>B-</option>
            <option value='AB+'>AB+</option>
            <option value='AB-'>AB-</option>
            <option value='O+'>O+</option>
            <option value='O-'>O-</option>
            <option value='DoNotKnow'>Não sei</option>
          </Select>
        </Box>
      </VStack>
      <VStack mt='4' spacing='5' justifyContent='space-around'>
        <Box w='100%' h='60px'>
          <Button type='submit' bolder>
            Entrar
          </Button>
        </Box>
        <Box>
          <Text as='span' color='gray.200'>
            Já é cadastrado?{' '}
          </Text>
          <Text
            as='span'
            color='blue.500'
            _hover={{ cursor: 'pointer' }}
            onClick={() => history.push('/login')}>
            Faça seu login!
          </Text>
        </Box>
      </VStack>
    </Grid>
  )
}

export default SignUpForm

import { Box, Button, Grid, Heading, Select, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import InputComponent from '../../components/input'

function SignUpForm({ hSubmit, errors, register }) {

  return (
    <Grid
      onSubmit={hSubmit}
      as='form'
      padding='20px 15px'
      border='3px solid'
      borderColor='#555'
      bg='white'
      color='#000'
      mt='4'
      w={['100%', '100%', '40%', '40%']}
      maxWidth='500px'
    >
      <Heading size="lg">Bem vindo!</Heading>
      <VStack mt="6" spacing="5">
        <Box w="100%" paddingBottom='4' >
          <InputComponent
            label='Seu Nome'
            errors={errors.name?.message}
            register={register}
            valueRegister='name'
            type='text'
          />
        </Box>
        <Box w="100%" paddingBottom='4' >
          <InputComponent
            label='Email'
            errors={errors.email?.message}
            register={register}
            valueRegister='email'
            type='email'
          />
        </Box>
        <Box w="100%"paddingBottom='4'>
          <InputComponent
            label='Confirme seu email'
            errors={errors.confirm_email?.message}
            register={register}
            valueRegister='confirm_email'
            type='email'
          />
        </Box>
        <Box w="100%"paddingBottom='4'>
          <InputComponent
            label='Senha'
            errors={errors.password?.message}
            register={register}
            valueRegister='password'
            type='password'
          />
        </Box>
        <Box w="100%"paddingBottom='4'>
          <InputComponent
            label='Confirme sua senha'
            errors={errors.confirm_password?.message}
            register={register}
            valueRegister='confirm_password'
            type='password'
          />
        </Box>
        <Box w="100%"paddingBottom='4'>
          <InputComponent
            label='Sua idade'
            errors={errors.age?.message}
            register={register}
            valueRegister='age'
            type='number'
          />
        </Box>
        <Box w="100%">
          <label>Sexo</label>
          <Select placeholder='Seu Sexo' {...register('gender')} >
            <option value='male'>Masculino</option>
            <option value='female'>Feminino</option>
            <option value='others'>Outros</option>
            <option value='undisclosed'>Prefiro não dizer</option>
          </Select>
          {!!errors.sex && <label>{errors.sex.message}</label>}
        </Box>
        <Box w="100%">
          <label>Tipo Sanguíneo</label>
          <Select placeholder='Seu tipo sanguíneo' {...register('bloodtype')}>
            <option value='male'>A+</option>
            <option value='male'>A-</option>
            <option value='male'>B+</option>
            <option value='male'>B-</option>
            <option value='male'>AB+</option>
            <option value='male'>AB-</option>
            <option value='male'>O+</option>
            <option value='male'>O-</option>
            <option value='DoNotKnow'>Não sei</option>
          </Select>
          {!!errors.blood && <label>{errors.blood.message}</label>}
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
        <Text color="#555">
          Já é cadastrado? Faça seu <Link to='/'>Login</Link> 
        </Text>
      </VStack>
    </Grid>
  )
}

export default SignUpForm
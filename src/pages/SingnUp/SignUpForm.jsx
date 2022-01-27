import { Box, Button, Grid, Heading, Select, Text, VStack, Flex } from '@chakra-ui/react'
import InputComponent from '../../components/input'
import { Link } from 'react-router-dom'
import { theme } from '../../styles/global'
function SignUpForm({ hSubmit, errors, register }) {

  return (
    <Grid
      onSubmit={hSubmit}
      as='form'
      padding='30px 15px'
      borderRadius='8'
      bg={theme.colors.blue[800]}
      mt={['4', '4', '0']}
      w={['100%', '100%', '50%', '50%']}
      maxWidth='500px'
      minWidth='350px'
    >
      <Heading textAlign='center' color={theme.colors.gray[200]} size="lg">Bem vindo!</Heading>
      <VStack mt="6" spacing="5">
        <Box w="100%">
          <InputComponent
            errors={errors.name?.message}
            register={register}
            valueRegister='name'
            type='text'
            placeholder='Nome'
          />
        </Box>
        <Box w="100%">
          <InputComponent
            errors={errors.email?.message}
            register={register}
            valueRegister='email'
            type='email'
            placeholder='Email'
          />
        </Box>
        <Box w="100%">
          <InputComponent
            errors={errors.confirm_email?.message}
            register={register}
            valueRegister='confirm_email'
            type='email'
            placeholder='Confirme seu email'
          />
        </Box>
        <Box w="100%">
          <InputComponent
            errors={errors.password?.message}
            register={register}
            valueRegister='password'
            type='password'
            placeholder='Senha'
          />
        </Box>
        <Box w="100%">
          <InputComponent
            errors={errors.confirm_password?.message}
            register={register}
            valueRegister='confirm_password'
            type='password'
            placeholder='Confirme sua senha'
          />
        </Box>
        <Box w="100%">
          <InputComponent
            errors={errors.age?.message}
            register={register}
            valueRegister='age'
            type='number'
            placeholder='Sua idade'
          />
        </Box>
        <Box w="100%">
          <Select bgColor={theme.colors.gray[900]} size='lg' color='gray' placeholder='Seu Sexo' {...register('gender')} >
            <option value='male'>Masculino</option>
            <option value='female'>Feminino</option>
            <option value='others'>Outros</option>
            <option value='undisclosed'>Prefiro não dizer</option>
          </Select>
          {!!errors.sex && <label>{errors.sex.message}</label>}
        </Box>
        <Box w="100%">
          <Select bgColor={theme.colors.gray[900]} size='lg' color='gray' placeholder='Seu tipo sanguíneo' {...register('bloodtype')}>
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
          bg={theme.colors.blue[700]}
          color={theme.colors.gray[900]}
          w="100%"
          h="40px"
          borderRadius="8px"
          _hover={{
            background: `${theme.colors.blue[300]}`,
          }}
          type="submit"
        >
          Cadastrar
        </Button>
        <Flex>
          Já é cadastrado? Faça seu
          <Link to={'/login'}><Text color={theme.colors.blue[500]}>Login</Text></Link>
        </Flex>
      </VStack>
    </Grid>
  )
}

export default SignUpForm
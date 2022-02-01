import { Center, Flex } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { FaSearch } from 'react-icons/fa'
import InputComponent from '../../components/input'
import { useProfessionals } from '../../providers/ProfessionalsContext'

const Search = () => {
  const { searchProfessionals } = useProfessionals()
  const handleSearch = ({ name }) => {
    searchProfessionals(name)
  }

  const { register, handleSubmit } = useForm()

  return (
    <Flex as='form' onSubmit={handleSubmit(handleSearch)} w={['90%', '60%']}>
      <InputComponent
        register={register}
        valueRegister='name'
        type='name'
        placeholder='Procure por especialidade'
      />
      <Center borderRadius='8px' as='button' w='50px' h='40px' fontSize='3xl'>
        <FaSearch />
      </Center>
    </Flex>
  )
}

export default Search

import Header from '../../components/Header'
import { useProfessionals } from '../../providers/ProfessionalsContext'
import { useEffect } from 'react'
import ProfessionalCard from '../../components/ProfessionalCard'
import Search from './Search'
import { Text, Flex } from '@chakra-ui/react'

const Professionals = () => {
  const { getProfessionals, professionals, notFound } = useProfessionals()

  useEffect(() => {
    getProfessionals()
  }, [])

  return (
    <>
      <Header actualPage='Profissionais' />
      <Flex w='100%' alignItems='center' justifyContent='center' mt='6' mb='6'>
        <Search />
      </Flex>
      <Flex
        justifyContent='space-evenly'
        alignItems='center'
        w='98%'
        wrap='wrap'>
        {notFound && <Text>Especialidade não encontrada</Text>}
        {professionals.map(prof => (
          <ProfessionalCard
            key={prof.id}
            name={prof.name}
            specialties={prof.specialties}
            contact={prof.contact}
            street={prof.workplace[0].Street}
            clinic={prof.workplace[0].name}
            city={prof.workplace[0].city}
          />
        ))}
      </Flex>
    </>
  )
}

export default Professionals

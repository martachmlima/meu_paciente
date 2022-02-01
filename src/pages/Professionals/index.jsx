import Header from '../../components/Header'
import { useProfessionals } from '../../providers/ProfessionalsContext'
import { useEffect } from 'react'
import ProfessionalCard from '../../components/ProfessionalCard'

const Professionals = () => {
  const { getProfessionals, professionals } = useProfessionals()

  useEffect(() => {
    getProfessionals()
  }, [])

  return (
    <>
      <Header actualPage='Profissionais' />
      {professionals.map(prof => (
        <ProfessionalCard
          key={prof.id}
          name={prof.name}
          specialties={prof.specialties[0]}
          contact={prof.contact}
          address={prof.workplace[0].Street}
        />
      ))}
    </>
  )
}

export default Professionals

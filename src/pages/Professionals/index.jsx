import Header from '../../components/Header'
import { useProfessionals } from '../../providers/ProfessionalsContext'
import { useEffect } from 'react'

const Professionals = () => {
  const { getProfessionals } = useProfessionals()

  useEffect(() => {
    getProfessionals()
  }, [])

  return (
    <>
      <Header actualPage='Profissionais' />
    </>
  )
}

export default Professionals

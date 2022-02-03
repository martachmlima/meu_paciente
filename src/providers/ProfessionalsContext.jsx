import { createContext, useContext, useState } from 'react'
import { api } from '../services'
import { useAuth } from './AuthContext'

const ProfessionalsContext = createContext({})

function useProfessionals() {
  return useContext(ProfessionalsContext)
}

function ProfessionalsProvider({ children }) {
  const [professionals, setProfessionals] = useState([])
  const [notFound, setNotFound] = useState(false)
  const { accessToken } = useAuth()

  const getProfessionals = () => {
    if (accessToken) {
      api
        .get('/professionals', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        .then(response => {
          setProfessionals(response.data)
        })
        .catch(err => console.log(err))
    }
  }

  const searchProfessionals = professionalSpecialty => {
    if (accessToken) {
      api
        .get(`/professionals?specialties_like=${professionalSpecialty}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        .then(response => {
          if (!response.data.length) {
            setProfessionals([])
            setNotFound(true)
          } else {
            setProfessionals(response.data)
            setNotFound(false)
          }
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <ProfessionalsContext.Provider
      value={{
        getProfessionals,
        professionals,
        searchProfessionals,
        notFound
      }}>
      {children}
    </ProfessionalsContext.Provider>
  )
}

export { ProfessionalsProvider, useProfessionals }

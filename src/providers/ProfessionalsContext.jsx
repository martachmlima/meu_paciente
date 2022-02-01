import { createContext, useContext, useState } from 'react'
import { api } from '../services'
import { useAuth } from './AuthContext'
import toast from 'react-hot-toast'

const ProfessionalsContext = createContext({})

function useProfessionals() {
  return useContext(ProfessionalsContext)
}

function ProfessionalsProvider({ children }) {
  const [professionals, setProfessionals] = useState([])
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
          console.log(response.data)
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <ProfessionalsContext.Provider value={{ getProfessionals, professionals }}>
      {children}
    </ProfessionalsContext.Provider>
  )
}

export { ProfessionalsProvider, useProfessionals }

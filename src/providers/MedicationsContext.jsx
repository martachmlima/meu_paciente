import { createContext, useContext, useState } from 'react'
import { api } from '../services'
import { useAuth } from './AuthContext'
import toast from 'react-hot-toast'

const MedicationsContext = createContext({})

function useMedications() {
  return useContext(MedicationsContext)
}

function MedicationsProvider({ children }) {
  const [medications, setMedications] = useState([])
  const { user, accessToken } = useAuth()

  const getMedications = token => {
    if (token) {
      api
        .get(`/users/${user.id}?_embed=medications`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          setMedications(response.data.medications)
        })
        .catch(err => console.log(err))
    }
  }

  const addMedication = (data, token) => {
    api
      .post('/medications', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setMedications([...medications, response.data])
        toast.success('Remédio adicionado com sucesso!')
      })
      .catch(err => toast.error('Erro ao adicionar remédio!'))
  }

  const completeMedication = id => {
    api
      .patch(
        `/medications/${id}`,
        { userId: user.id, completed: true },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )
      .then(res => {
        getMedications(accessToken)
        toast.success('Remédio arquivado!')
      })
      .catch(err => toast.error('Erro ao arquivar!'))
  }

  const editMedication = (id, data) => {
    api
      .patch(`/medications/${id}`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        getMedications(accessToken)
        toast.success('Edição realizada!')
      })
      .catch(err => toast.error('Erro ao editar'))
  }

  const deleteMedication = id => {
    api
      .delete(`/medications/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(res => {
        getMedications(accessToken)
        toast.success('Remédio excluído!')
      })
      .catch(err => toast.error('Erro ao excluir!'))
  }

  return (
    <MedicationsContext.Provider
      value={{
        getMedications,
        medications,
        setMedications,
        addMedication,
        completeMedication,
        editMedication,
        deleteMedication
      }}>
      {children}
    </MedicationsContext.Provider>
  )
}

export { MedicationsProvider, useMedications }

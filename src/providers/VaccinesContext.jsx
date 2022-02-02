import { useContext, createContext, useState } from 'react'
import toast from 'react-hot-toast'
import { api } from '../services'
import { useAuth } from './AuthContext'

const VaccinesContext = createContext({})

export const useVaccines = () => {
  return useContext(VaccinesContext)
}

export const VaccinesProvider = ({ children }) => {
  const [vaccines, setVaccines] = useState([])
  const { user, accessToken } = useAuth()
  const getVaccines = token => {
    if (token) {
      api
        .get(`/users/${user.id}?_embed=vaccines`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          setVaccines(response.data.vaccines)
        })
        .catch(err => console.log(err))
    }
  }
  const addVaccines = data => {
    api
      .post('/vaccines', data, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        setVaccines([...vaccines, response.data])
        toast.success('Vacina adicionada com sucesso')
      })
      .catch(err => console.log(err))
  }
  const completeVaccines = id => {
    api
      .patch(
        `/vaccines/${id}`,
        { userId: user.id, completed: true },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )
      .then(_ => toast.success('Vacina arquivada com sucesso'))
      .catch(err => console.log(err))
  }
  const incompleteVaccines = id => {
    api
      .patch(
        `/vaccines/${id}`,
        { userId: user.id, completed: false },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )
      .then(_ => toast.success('Vacina desarquivada com sucesso'))
      .catch(err => console.log(err))
  }
  const editVaccines = (id, data) => {
    api
      .patch(`/vaccines/${id}`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(
        _ => getVaccines(accessToken),
        toast.success('Vacina editada com succeso')
      )
      .catch(err => console.log(err))
  }
  const deleteVaccines = id => {
    api
      .delete(`/vaccines/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(res => getVaccines(accessToken), toast.success('Vacina deletada'))
      .catch(err => console.log(err))
  }
  return (
    <VaccinesContext.Provider
      value={{
        vaccines,
        addVaccines,
        editVaccines,
        getVaccines,
        completeVaccines,
        incompleteVaccines,
        deleteVaccines
      }}>
      {children}
    </VaccinesContext.Provider>
  )
}

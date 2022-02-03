import { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { api } from '../services'
import { useAuth } from './AuthContext'

const UserContext = createContext({})

function useUser() {
  return useContext(UserContext)
}

function UserProvider({ children }) {
  const [medications, setMedications] = useState([])
  const [appointment, setAppointment] = useState([])
  const token = localStorage.getItem('@+saude:accessToken')
  const { user } = useAuth()
  const getMedications = token => {
    if (token) {
      api
        .get('/medications', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          setMedications(response.data)
        })
        .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    if (token) {
      api
        .get(`/users/${user.id}?_embed=appointments`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          setAppointment(response.data.appointments)
        })
        .catch(err => console.log(err))
    }
  }, [])

  const handleAppointmentCompleted = (id, comp) => {
    const completed = {
      completed: !comp
    }
    if (token) {
      api
        .patch(`/appointments/${id}`, completed, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          toast.success('Consulta arquivada!')
          api
            .get(`/users/${user.id}?_embed=appointments`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            .then(response => {
              setAppointment(response.data.appointments)
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
  }

  const handleAppointmentDelete = id => {
    if (token) {
      api
        .delete(`/appointments/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          toast.success('Consulta deletada!')
          api
            .get(`/users/${user.id}?_embed=appointments`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            .then(response => {
              setAppointment(response.data.appointments)
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
  }

  const handlePostAppointment = data => {
    if (token) {
      api
        .post(`/appointments/`, data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          toast.success('Consulta adicionada!')
          api
            .get(`/users/${user.id}?_embed=appointments`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            .then(response => {
              setAppointment(response.data.appointments)
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
  }
  const handleEditAppointment = (data, obj) => {
    if (token) {
      api
        .patch(`/appointments/${obj.id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          toast.success('Consulta arquivada!')
          api
            .get(`/users/${user.id}?_embed=appointments`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            .then(response => {
              setAppointment(response.data.appointments)
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <UserContext.Provider
      value={{
        getMedications,
        medications,
        setMedications,
        appointment,
        handleAppointmentCompleted,
        handlePostAppointment,
        handleAppointmentDelete,
        handleEditAppointment
      }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, useUser }

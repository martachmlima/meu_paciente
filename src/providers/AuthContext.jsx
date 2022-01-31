import { createContext, useContext, useState, useCallback } from 'react'
import { api } from '../services'

const AuthContext = createContext({})

const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }) {
  const [data, setData] = useState(() => {
    const accessToken = localStorage.getItem('@+saude:accessToken')
    const user = localStorage.getItem('@+saude:user')

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) }
    } else {
      return {}
    }
  })

  const signUp = params => {
    api.post('/login', params).then(res => {
      console.log('Usuário logado')
      console.log(res)
      const { accessToken, user } = res.data

      localStorage.setItem('@+saude:accessToken', accessToken)
      localStorage.setItem('@+saude:user', JSON.stringify(user))
      setData({ accessToken, user })
    })
  }

  const addAllergy = useCallback(
    async (newAllergy, userAllergies, userId, token) => {
      await api
        .patch(
          `/users/${userId}`,
          { allergies: [newAllergy, ...userAllergies] },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        .then(res => {
          const user = res.data
          localStorage.setItem('@+saude:user', JSON.stringify(user))
          data.user = user
        })
        .catch(err => console.log(err))
    },
    []
  )

  const addDisease = useCallback(
    async (newDisease, userDisease, userId, token) => {
      await api
        .patch(
          `/users/${userId}`,
          { illnesses: [newDisease, ...userDisease] },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        .then(res => {
          const user = res.data
          localStorage.setItem('@+saude:user', JSON.stringify(user))
          data.user = user
        })
        .catch(err => console.log(err))
    },
    []
  )

  const removeDisease = async (removeDisease, userDisease, userId, token) => {
    const newArrDisease = userDisease.filter(
      disease => disease !== removeDisease
    )
    await api
      .patch(
        `/users/${userId}`,
        { illnesses: newArrDisease },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => {
        const user = res.data
        localStorage.setItem('@+saude:user', JSON.stringify(user))
        data.user = user
      })
      .catch(err => console.log(err))
  }

  const removeAllergy = async (removeAllergy, userAllergy, userId, token) => {
    const newArrAllergy = userAllergy.filter(
      allergy => allergy !== removeAllergy
    )
    await api
      .patch(
        `/users/${userId}`,
        { allergies: newArrAllergy },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => {
        const user = res.data
        localStorage.setItem('@+saude:user', JSON.stringify(user))
        data.user = user
      })
      .catch(err => console.log(err))
  }

  const logOut = () => {
    localStorage.removeItem('@+saude:accessToken')
    localStorage.removeItem('@+saude:user')
    setData({})
  }

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        signUp,
        logOut,
        addAllergy,
        addDisease,
        removeDisease,
        removeAllergy
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, useAuth }

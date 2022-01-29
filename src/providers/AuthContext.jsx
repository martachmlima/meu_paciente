import { createContext, useContext, useState, useCallback } from 'react'
import { api } from '../services'

const AuthContext = createContext({})

const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }) {
  const [allergiesAndIllnesses, setAllergiesAndIllnesses] = useState({})

  const [data, setData] = useState(() => {
    const accessToken = localStorage.getItem('@+saude:accessToken')
    const user = localStorage.getItem('@+saude:user')

    if (accessToken && user) {
      const { allergies, illnesses } = JSON.parse(user)
      setAllergiesAndIllnesses({ allergies, illnesses })
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
      console.log(user)
      setData({ accessToken, user })
      setAllergiesAndIllnesses({
        allergies: user.allergies,
        illnesses: user.illnesses
      })
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
          setAllergiesAndIllnesses({
            allergies: user.allergies,
            illnesses: user.illnesses
          })
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
          setAllergiesAndIllnesses({
            allergies: user.allergies,
            illnesses: user.illnesses
          })
        })
        .catch(err => console.log(err))
    },
    []
  )

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
        signUp: signUp,
        logOut,
        addAllergy,
        addDisease,
        allergiesAndIllnesses
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, useAuth }

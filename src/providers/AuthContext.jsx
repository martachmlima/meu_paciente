import { createContext, useContext, useState } from 'react'
import { api } from '../services'
import toast from 'react-hot-toast'

const AuthContext = createContext({})

const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }) {
  const [allergiesAndIllnesses, setAllergiesAndIllnesses] = useState(() => {
    const user = localStorage.getItem('@+saude:user')
    if (user) {
      return {
        allergies: user.allergies,
        illnesses: user.illnesses
      }
    } else {
      return {
        allergies: [],
        illnesses: []
      }
    }
  })

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
    api
      .post('/login', params)
      .then(res => {
        toast.success('Você está logado')
        const { accessToken, user } = res.data

        localStorage.setItem('@+saude:accessToken', accessToken)
        localStorage.setItem('@+saude:user', JSON.stringify(user))
        setData({ accessToken, user })
        setAllergiesAndIllnesses({
          allergies: user.allergies,
          illnesses: user.illnesses
        })
      })
      .catch(err => {
        toast.error('Usuário ou senha incorreto')
        console.log(err)
      })
  }

  const addAllergy = async (newAllergy, userAllergies, userId, token) => {
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
        toast.success('Alergia adicionada')
        const user = res.data
        localStorage.setItem('@+saude:user', JSON.stringify(user))
        data.user = user
        setAllergiesAndIllnesses({
          allergies: user.allergies,
          illnesses: user.illnesses
        })
      })
      .catch(err => {
        toast.error('Erro inesperado. Tente novamente mais tarde')
        console.log(err)
      })
  }

  const addDisease = async (newDisease, userDisease, userId, token) => {
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
        toast.success('Doença adicionada')
        const user = res.data
        localStorage.setItem('@+saude:user', JSON.stringify(user))
        data.user = user
        setAllergiesAndIllnesses({
          allergies: user.allergies,
          illnesses: user.illnesses
        })
      })
      .catch(err => {
        toast.error('Erro inesperado. Tente novamente mais tarde')
        console.log(err)
      })
  }

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
        toast.success('Doença removida')
        const user = res.data
        localStorage.setItem('@+saude:user', JSON.stringify(user))
        data.user = user
        setAllergiesAndIllnesses({
          allergies: user.allergies,
          illnesses: user.illnesses
        })
      })
      .catch(err => {
        toast.error('Erro inesperado. Tente novamente mais tarde')
        console.log(err)
      })
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
        toast.success('Doença removida')
        const user = res.data
        localStorage.setItem('@+saude:user', JSON.stringify(user))
        data.user = user
        setAllergiesAndIllnesses({
          allergies: user.allergies,
          illnesses: user.illnesses
        })
      })
      .catch(err => {
        toast.error('Erro inesperado. Tente novamente mais tarde')
        console.log(err)
      })
  }

  const logOut = () => {
    toast.success('Você saiu')
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
        removeAllergy,
        allergiesAndIllnesses
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, useAuth }

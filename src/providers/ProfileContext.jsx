import { createContext, useContext } from 'react'
import { api } from '../services'
import { useAuth } from './AuthContext'

const ProfileContext = createContext({})

export const useProfile = () => {
  return useContext(ProfileContext)
}

export const ProfileProvider = ({ children }) => {
  const { user, accessToken } = useAuth()
  const editProfile = data => {
    api
      .patch(`/users/${user.id}`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(_ => console.log(_))
  }
  return (
    <ProfileContext.Provider value={{ editProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

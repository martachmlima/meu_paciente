import { createContext, useContext, useState } from 'react'
import { api } from '../services'
import { useAuth } from './AuthContext'

const ProfileContext = createContext({})

export const useProfile = () => {
  return useContext(ProfileContext)
}

export const ProfileProvider = ({ children }) => {
  const { user, accessToken } = useAuth()
  const [users, setUsers] = useState(user)
  const attProfile = () => {
    api
      .get(`/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => setUsers(response.data))
  }
  const editProfile = data => {
    api
      .patch(`/users/${user.id}`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(
        _ => attProfile,
        localStorage.setItem(
          '@+saude:user',
          JSON.stringify({
            email: user.email,
            name: data.name,
            age: user.age,
            gender: data.gender,
            bloodtype: data.bloodtype,
            weight: data.weight,
            height: data.height,
            allergies: user.allergies,
            illnesses: user.illnesses,
            id: user.id
          })
        )
      )
  }
  return (
    <ProfileContext.Provider
      value={{ user: users || user, attProfile, editProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

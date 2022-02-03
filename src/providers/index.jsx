import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './AuthContext'
import { MedicationsProvider } from './MedicationsContext'
import { UserProvider } from './UserContext'
import { VaccinesProvider } from './VaccinesContext'
import { theme } from '../styles/global'
import { ProfessionalsProvider } from './ProfessionalsContext'
import { ProfileProvider } from './ProfileContext'

export const AppProvider = ({ children }) => (
  <AuthProvider>
    <ProfessionalsProvider>
      <MedicationsProvider>
        <VaccinesProvider>
          <UserProvider>
            <ProfileProvider>
              <ChakraProvider theme={theme}>{children}</ChakraProvider>
            </ProfileProvider>
          </UserProvider>
        </VaccinesProvider>
      </MedicationsProvider>
    </ProfessionalsProvider>
  </AuthProvider>
)

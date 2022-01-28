import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./AuthContext";
import { MedicationsProvider } from "./MedicationsContext";
import { UserProvider } from "./UserContext";
import { VaccinesProvider } from "./VaccinesContext";

export const AppProvider = ({ children }) => (
  <AuthProvider>
    <MedicationsProvider>
      <VaccinesProvider>
        <UserProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </UserProvider>
      </VaccinesProvider>
    </MedicationsProvider>
  </AuthProvider>
);

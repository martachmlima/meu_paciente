import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./AuthContext";
import { MedicationsProvider } from "./MedicationsContext";
import { UserProvider } from "./UserContext";
import { VaccinesProvider } from "./VaccinesContext";
import { theme } from "../styles/global";

export const AppProvider = ({ children }) => (
  <AuthProvider>
    <MedicationsProvider>
      <VaccinesProvider>
        <UserProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </UserProvider>
      </VaccinesProvider>
    </MedicationsProvider>
  </AuthProvider>
);

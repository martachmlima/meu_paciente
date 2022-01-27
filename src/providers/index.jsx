import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./AuthContext";
import { MedicationsProvider } from "./MedicationsContext";
import { VaccinesProvider } from "./VaccinesContext";

export const AppProvider = ({ children }) => (
  <AuthProvider>
    <MedicationsProvider>
      <VaccinesProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </VaccinesProvider>
    </MedicationsProvider>
  </AuthProvider>
);

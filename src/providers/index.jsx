import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./AuthContext";
import { MedicationsProvider } from "./MedicationsContext";

export const AppProvider = ({ children }) => (
  <AuthProvider>
    <MedicationsProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </MedicationsProvider>
  </AuthProvider>
);

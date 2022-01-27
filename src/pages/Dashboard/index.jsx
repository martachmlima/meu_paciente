import { useAuth } from "../../providers/AuthContext";
import { Button } from "@chakra-ui/react";

const Dashboard = () => {
  const { logOut } = useAuth();

  return (
    <div>
      Dashboard
      <Button onClick={logOut}>logout</Button>
    </div>
  );
};

export default Dashboard;

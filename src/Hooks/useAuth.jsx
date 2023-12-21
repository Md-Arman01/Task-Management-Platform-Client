import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAuth = () => {
  const authProvider = useContext(AuthContext);

  return authProvider;
};

export default useAuth;

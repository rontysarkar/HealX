import { useContext } from "react";
import { AuthContext } from "../AuthProvier/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default useAuth;
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { axiosSecure } from "./useAxiosSecure";

const useRole = () => {
    const {user} = useAuth()
    const {data:role} = useQuery({
        queryKey:['role',user],
        queryFn:async()=>{
            const {data} = await axiosSecure(`users/${user?.email}`)
            return data
        }
    })
    return [role?.role]
    
};

export default useRole;
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useRole = () => {
    const axiosPrivate = useAxiosPrivate()
    const {user} = useAuth()
    const {data:role} = useQuery({
        queryKey:['role',user],
        queryFn:async()=>{
            const {data} = await axiosPrivate(`users/${user?.email}`)
            return data
        }
    })
    return [role?.role]
    
};

export default useRole;
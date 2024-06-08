import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { axiosSecure } from "./useAxiosSecure";

const useCart = () => {
    const {user} = useAuth()
    const {data:cartData=[],refetch} = useQuery({
        queryKey:['cart',user],
        queryFn:async()=>{
            const {data} = await axiosSecure(`cart/${user?.email}`)
            return data
        }
    })
    return [cartData,refetch]
};

export default useCart;
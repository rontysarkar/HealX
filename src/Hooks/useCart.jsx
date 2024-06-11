import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useCart = () => {
    const {user} = useAuth()
    const axiosPrivate = useAxiosPrivate()
    const {data:cartData=[],refetch} = useQuery({
        queryKey:['cart',user?.email],
        queryFn:async()=>{
            const {data} = await axiosPrivate(`cart/${user?.email}`)
            return data
        }
    })
    return [cartData,refetch]
};

export default useCart;
import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";

const useSalesMedicine = () => {
    const axiosPrivate = useAxiosPrivate()

    const {data:salesData=[]} = useQuery({
        queryKey:['sales'],
        queryFn:async()=>{
            const res = await axiosPrivate.get('order-stats')
            return res.data
        }
    })
    
    return [salesData]
};

export default useSalesMedicine;
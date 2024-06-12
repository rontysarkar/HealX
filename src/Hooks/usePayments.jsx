import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";

const usePayments = () => {
    const axiosPrivate = useAxiosPrivate()
    const {data:paymentsData =[],refetch} = useQuery({
        queryKey:['allPayments'],
        queryFn:async()=>{
            const res = await axiosPrivate('payments')
            return res.data
        }
    })
    return [paymentsData,refetch]
};

export default usePayments;
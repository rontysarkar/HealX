import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";

const useAdvertise = () => {
    const axiosPrivate = useAxiosPrivate()
    const { data: advertiseData = [], refetch } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const { data } = await axiosPrivate('advertise')
            return data
        }

    })
    return [ advertiseData,refetch]
};

export default useAdvertise;
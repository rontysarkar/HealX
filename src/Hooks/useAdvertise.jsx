import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";

const useAdvertise = () => {
    const { data: advertiseData = [], refetch } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const { data } = await axiosSecure('advertise')
            return data
        }

    })
    return [ advertiseData,refetch]
};

export default useAdvertise;
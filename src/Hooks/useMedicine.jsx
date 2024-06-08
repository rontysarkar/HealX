import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "./useAxiosCommon";

const useMedicine = () => {
   
    const {data:medicines = [],refetch} = useQuery({
        queryKey:["medicine"],
        queryFn:async()=>{
            const {data} = await axiosCommon("medicines")
            return data
            

        }
    })

    return [medicines,refetch]
};

export default useMedicine;
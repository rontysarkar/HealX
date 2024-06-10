import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "./useAxiosCommon";

const useCategory = () => {
    
    const {data: categoryData =[],refetch} = useQuery({
        queryKey:['category'],
        queryFn:async()=>{
            const {data} = await axiosCommon('category')
            return data
        }
    })

    return [categoryData,refetch]
};

export default useCategory;
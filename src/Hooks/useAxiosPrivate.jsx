import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosPrivate = axios.create({
    baseURL:import.meta.env.VITE_DB_URL
})
const useAxiosPrivate = () => {
    const navigate = useNavigate()
    const {LogOut} = useAuth()
    // Request interceptors 

    axiosPrivate.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('token is her ',token)
        config.headers.authorization = `Bearer ${token}`
        return config
    },function(error){
        return Promise.reject(error)
    })


    // Response Interceptors

    axiosPrivate.interceptors.response.use(function(response){
        return response;
    }, async (error) =>{
        const status = error.response.status
        if(status == 401 || status == 403){
            await LogOut()
            navigate('/login')
        }
        return Promise.reject(error)
    })



    return axiosPrivate
};

export default useAxiosPrivate;
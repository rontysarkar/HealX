
import axios from "axios";



export const axiosSecure = axios.create({
    baseURL:import.meta.env.VITE_DB_URL
})

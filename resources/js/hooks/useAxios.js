import axios from "axios";
import { useEffect } from "react";
import { getSessionToken } from "@shopify/app-bridge/utilities";
import { useAppBridge } from "@shopify/app-bridge-react";


const useAxios = () =>{
    const app = useAppBridge()
    useEffect (() =>{
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

        const interceptor = axios.interceptors.request.use(function(config){
            
            return getSessionToken(app).then(async (token) => {
                config.headers.Authorization =`Bearer ${token}`
                console.log(token);
                return config
            })
        })

        return ()=> axios.interceptors.request.eject(interceptor)
    }, [])
    return {axios}
}

export default useAxios
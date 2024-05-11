import { useEffect } from "react";
import useServices from "../../services/useServices";



const useApi = () => {

  const {handle,data,loading,error} = useServices(import.meta.env.VITE_URL_API_PRODUCTS as string);
  
  useEffect(() => {
    handle();
  },[]);

  return {
      data,
      loading,
      error
  }
}

export default useApi

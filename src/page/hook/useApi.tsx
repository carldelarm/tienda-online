import { useEffect } from "react";
import useServices from "../../services/useServices";

const useApi = () => {

  const {handle,data,loading,error} = useServices('https://fakestoreapi.com/products');
  
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

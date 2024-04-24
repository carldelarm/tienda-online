import { useEffect, useState } from "react";

const useServices = (url:string) => {

    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    
    const handle = async () => {
        setLoading(true);
        fetch(url)
        .then(res=>res.json())
        .then(json=>{
          console.log(json);
          setData(json);
        })
        .catch(err=>{
          console.log(err)
          setError(err);
        })
        .finally(()=>{
          setLoading(false);
          console.log('API call done')
        });
    }

    useEffect(() => {
        handle();
    },[]);
  
    return {
        data,
        handle,
        loading,
        error
    }
}

export default useServices

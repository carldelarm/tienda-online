import { useEffect, useState } from "react";
import { Product } from "../types/Productos";

const useServices = (url:string) => {

    const [data,setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);

    
    const handle = async () => {
        setLoading(true);
        fetch(url)
        .then(res=>res.json())
        .then(json=>{
          const formattedItems = json.map((item:Product) => {
            return {
              ...item,
              isAddProduct:false,
              formattedPrice: `${item.price} $`
            }
          });
          console.log(formattedItems);
          setData(formattedItems);
        })
        .catch(err=>{
          console.log(err)
          setError(err);
        })
        .finally(()=>{
          setLoading(false);
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

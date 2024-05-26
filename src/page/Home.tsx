//import CrButton from "../components/CrButton"
import { Box, CircularProgress, Container, Grid } from "@mui/material"
import CrCard from "../components/CrCard"
//import useApi from "./hook/useApi"
import { Product } from "../types/Productos"
import HomeLayout from "./layout/HomeLayout"
//import { useLocation } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { PaymentContext } from "../store/PaymentContext"
import { useContext, useEffect, useState } from "react"
import CrComboCategories from "../components/CrComboCategories"

const Home = () => {

  const { products } = useContext(PaymentContext);

  const history = useHistory();

  const [ data,setData ] = useState<Product[]>([]);
  const [ loading,setLoading ] = useState<boolean>(false);
  const [ category,setCategory ] = useState('');

  //let {data, loading} = useApi(category);
  
  /*
  `const location = useLocation();
  console.log(location.pathname);`
  */

  const handlePayment = () => {
    if(products.length === 0) {
      history.push('/');
    } else {
      history.push('/carrito');
    }
  }

  const getProductsByCategory = async () => {
    try {
      let urlApi = import.meta.env.VITE_URL_API_PRODUCTS as string;

      if(category !== 'todas' && category !== ''){
        urlApi = `${urlApi}/category/${category}`;
      }

      const response = await fetch(urlApi);
      const data = await response.json();
      return {
        data,
        loading:true
      };

    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    setLoading(true);
    getProductsByCategory()
    .then(response => {
      const formattedItems = response.data.map((item:Product) => {
        return {
          ...item,
          isAddProduct:false,
          formattedPrice: `${item.price} $`,
          selectedQuantity: 0
        }
      });
      setData(formattedItems);
      setLoading(response.loading);
    })
    .catch(error => {
      console.log(error);
      history.push('/*');
    })
    .finally(() => {
      setLoading(false);
    });
 
  },[category]);

  return (
    <HomeLayout handlePayment={handlePayment} >
      <div className="contenedor-categoria">
        <CrComboCategories setCategory={setCategory} />
      </div>
      <Container maxWidth="lg">
          <Box mt={5} display={'flex'} gap={2} >
          {
            loading ? (
              <Box  >
                {
                <CircularProgress />  
                }
              </Box>
            ) : (
              <>
                <Grid container spacing={2}>
                  {data.map((item:Product) => (
                      <Grid item key={item.id} xs={12} sm={6} md={4} xl={4} lg={4} >
                        <CrCard item={item} />
                      </Grid>
                  ))}
                </Grid>
              </>
            )
          }
          </Box>
      </Container>
    </HomeLayout>
  )
}

export default Home

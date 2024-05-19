//import CrButton from "../components/CrButton"
import { Box, CircularProgress, Container, Grid } from "@mui/material"
import CrCard from "../components/CrCard"
import useApi from "./hook/useApi"
import { Product } from "../types/Productos"
import HomeLayout from "./layout/HomeLayout"
//import { useLocation } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { PaymentContext } from "../store/PaymentContext"
import { useContext } from "react"

const Home = () => {

  const { products } = useContext(PaymentContext);

  const history = useHistory();

  const {data, loading} = useApi();
  
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

  return (
    <HomeLayout handlePayment={handlePayment} >
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
            <Grid container spacing={2}>
              {data.map((item:Product) => (
                  <Grid item key={item.id} xs={12} sm={6} md={2} xl={6} lg={4} >
                    <CrCard item={item} />
                  </Grid>
              ))}
            </Grid>)
          }
          </Box>
      </Container>
    </HomeLayout>
  )
}

export default Home

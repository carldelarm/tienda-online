//import CrButton from "../components/CrButton"
import { Box, CircularProgress, Container, Grid } from "@mui/material"
import CrCard from "../components/CrCard"
import useApi from "./hook/useApi"
import { Product } from "../types/Productos"
import HomeLayout from "./layout/HomeLayout"
//import { useLocation } from "react-router-dom"
import { useState } from "react"

const Home = () => {

  const [ totalArticles,setTotalArticles ] = useState(0);
  
  const {data, loading} = useApi();
  
  /*
  `const location = useLocation();
  console.log(location.pathname);`
  */
  
  const handleAddArticle = (idProduct:number) => {
    data.filter((item:Product) => {
      if(item.id === idProduct){
        item.isAddProduct = !item.isAddProduct;
        if(item.isAddProduct){
          setTotalArticles(totalArticles + 1);
        } else {  
          setTotalArticles(totalArticles > 0 ? totalArticles - 1 : 0);
        }
      }
      return item;
    });
  }

  const handlePayment = () => {
    data.filter((item:Product) => {
      if(item.isAddProduct){
        console.log('item',item);
      }
    });
  }

  return (
    <HomeLayout totalArticles={totalArticles} handlePayment={handlePayment} >
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
                    <CrCard item={item} handleAddArticle={handleAddArticle} />
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

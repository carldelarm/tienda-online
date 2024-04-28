//import CrButton from "../components/CrButton"
import { Box, Container, Grid } from "@mui/material"
import CrCard from "../components/CrCard"
import useApi from "./hook/useApi"
import { Product } from "../types/Productos"
import HomeLayout from "./layout/HomeLayout"
import { useLocation } from "react-router-dom"

const Home = () => {

  const location = useLocation();
  console.log(location.pathname);

  const {data, loading} = useApi();

  return (
    <HomeLayout>
      <Container maxWidth="lg">
          <Box sx={{
              display: 'flex',
              marginTop: 5,
              gap: 2,
          }}>

          {
            loading ? <p>Loading...</p> : (
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

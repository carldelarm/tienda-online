//import CrButton from "../components/CrButton"
import { Box, Container, Grid } from "@mui/material"
import CrCard from "../components/CrCard"
import CrNavBar from "../components/CrNavBar"
import useApi from "./hook/useApi"

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

const Home = () => {

  const {data, loading} = useApi();

  return (
    <>
      <CrNavBar />
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
                    <CrCard title={item.title}
                            imagen={item.image} 
                            description={item.description}
                            rate={item.rating.rate}
                    />
                  </Grid>
              ))}
            </Grid>)
          }
          </Box>
      </Container>
    </>
  )
}

export default Home

//import CrButton from "../components/CrButton"
import { Box, Container, Grid } from "@mui/material"
import CrCard from "../components/CrCard"
import CrNavBar from "../components/CrNavBar"
import { useEffect, useState } from "react"

const Home = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setData(json))
  },[]);

  return (
    <>
      <CrNavBar />
      <Container maxWidth="lg">
          <Box sx={{
              display: 'flex',
              marginTop: 5,
              gap: 2,
          }}>

          <Grid container spacing={2}>
            {data.map((item) => (
                <Grid item xs={12} sm={6} md={4} xl={6} lg={3} key={item}>
                  <CrCard />
                </Grid>
            ))}
          </Grid>
          </Box>
      </Container>
    </>
  )
}

export default Home

//import CrButton from "../components/CrButton"
import { Box } from "@mui/material"
import CrCard from "../components/CrCard"
import CrNavBar from "../components/CrNavBar"

const Home = () => {
  return (
    <>
        <CrNavBar />
        <Box sx={{
            display: 'flex',
            marginTop: 5,
            gap: 2,
        }}>
            {[1,2,3].map((item) => (
                <CrCard key={item}/>
            ))}
        </Box>
    </>
  )
}

export default Home

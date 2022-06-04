import { Box, Grid, Paper, styled, Typography } from "@mui/material"
import NavDash from "../../components/NavDash";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const DashBoard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        <Grid item xs='auto' sx={{height:'100vh', position:'sticky', top:50,  borderRight: '1px solid #eee',}}>
          <NavDash />
        </Grid>
        <Grid item xs={9}>
          <Item>
<Typography variant="h3">
     When writing components
     </Typography>

          </Item>
          
          <Item>
<Typography variant="h3">
     When writing components     When writing components along with other logic, that can be painful. As a result, a lot of bugs occur. I want this project to be a place that you can look for components that you like, then customize a little bit, and finally copy to your project. I hope that this will help you focus on the logic of the web and release new great features to the world faster.

     </Typography>

          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default DashBoard
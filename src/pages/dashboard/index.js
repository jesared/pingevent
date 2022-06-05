import { Box, Grid, Paper, styled, Typography } from "@mui/material"

import NavDash from "../../components/NavDash";
import BasicTimeline from "./BasicTimeline";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const DashBoard = () => {
  return (
    <>
    
          
    {/* <NavDash sx={{display: {xs: 'block', sm: 'none', md: 'none', lg: 'none'}}}/> */}
    
    <Box sx={{ flexGrow: 1 }}> 
    
      <Grid container spacing='auto' >
        <Grid item  md='auto' sx={{display: { xs: 'none', sm: 'none', md: 'block' }, borderRight: '1px solid #eee', }}>
          <NavDash />
        </Grid>
       
        <Grid item xs={12} sm={12} md={4} lg={6} xl={6}  sx={{ margin: '30px auto' }}>
          <Item>
            <Typography variant="h3">
              Résumé du dashboard
            </Typography>
            <BasicTimeline />
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}  sx={{ margin: '30px auto' }}>
          <Item>
            <Typography variant="h3">
              Résumé du dashboard
            </Typography>
            <BasicTimeline />
          </Item>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default DashBoard
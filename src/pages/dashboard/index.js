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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        <Grid item xs='auto' sx={{ height: '100vh', position: 'sticky', top: 60, borderRight: '1px solid #eee', }}>
          <NavDash />
        </Grid>
        <Grid item xs={9} sx={{ marginTop: 5 }}>
          <Item>
            <Typography variant="h3">
              Résumé du dashboard
            </Typography>

            <BasicTimeline />


          </Item>

        </Grid>
      </Grid>
    </Box>
  )
}

export default DashBoard

import { Box, Grid } from "@mui/material"
import { Outlet } from "react-router-dom";
import NavDash from "../../components/NavDash";
import NavDashMobile from "../../components/NavDashMobile";

const DashBoard = () => {

  return (
    <>
      {/* menu dashboard mobile */}
      <NavDashMobile />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing='auto' >
          <Grid item md='auto' sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, borderRight: '1px solid #eee', }}>
            <NavDash />
          </Grid>
          <Outlet />
        </Grid>
      </Box>
    </>
  )
}

export default DashBoard
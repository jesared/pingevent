import styled from "@emotion/styled";
import { Box, Grid, Paper, Typography } from "@mui/material"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing='auto' >
        <Grid item xs={12} sx={{ margin: '30px auto' }}>
          <Item>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>Accueil</Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
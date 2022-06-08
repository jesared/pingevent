import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


import { Event, ListAltSharp, MonetizationOn, NetworkCheckRounded, SupervisedUserCircle, TableChart } from '@mui/icons-material';
import { Link } from 'react-router-dom';


function NavDash() {

  return (

    <Box sx={{ bgcolor: '#f5f5f5', paddingTop: 3, height: '100vh', margin: 0, position: 'sticky', top: '50px' }}>
      <nav aria-label="main dashboard folders" className='dashboard'> 
        <List>
          <Link to='/dashboard' sx={{ textDecoration: 'none', color: '#333' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NetworkCheckRounded />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </Link>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListAltSharp />
              </ListItemIcon>
              <ListItemText primary="List" />
            </ListItemButton>
          </ListItem>
          <Link to='/dashboard/events' sx={{ textDecoration: 'none', color: '#333' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Event />
                </ListItemIcon>
                <ListItemText primary="Events" />
              </ListItemButton>
            </ListItem>
          </Link>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TableChart />
              </ListItemIcon>
              <ListItemText primary="Epreuves" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MonetizationOn />
              </ListItemIcon>
              <ListItemText primary="Paiement" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SupervisedUserCircle />
              </ListItemIcon>
              <ListItemText primary="Joueurs" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  )
}
export default NavDash

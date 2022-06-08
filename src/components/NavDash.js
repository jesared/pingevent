import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


import { Event, ListAltSharp, MonetizationOn, NetworkCheckRounded, SupervisedUserCircle, TableChart } from '@mui/icons-material';
import {  NavLink } from 'react-router-dom';


function NavDash() {
 

  return (

    <Box sx={{ bgcolor: '#f5f5f5', paddingTop: 3, height: '100vh', margin: 0, position: 'sticky', top: '50px' }}>
      <nav aria-label="main dashboard folders" className='dashboard'> 
        <List>
          <NavLink to='/dashboard'  >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NetworkCheckRounded />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to='/dashboard/list'  >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ListAltSharp />
                </ListItemIcon>
                <ListItemText primary="List" />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink  to='/dashboard/events' >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Event />
                </ListItemIcon>
                <ListItemText primary="Events" />
              </ListItemButton>
            </ListItem>
          </NavLink>
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

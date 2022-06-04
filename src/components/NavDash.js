import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import DraftsIcon from '@mui/icons-material/Drafts';
import { Grid4x4, ListAltSharp } from '@mui/icons-material';

function NavDash() {
  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListAltSharp />
              </ListItemIcon>
              <ListItemText primary="List" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Grid4x4 />
              </ListItemIcon>
              <ListItemText primary="Tableaux" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Grid4x4 />
              </ListItemIcon>
              <ListItemText primary="Tableaux" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Grid4x4 />
              </ListItemIcon>
              <ListItemText primary="Tableaux" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Grid4x4 />
              </ListItemIcon>
              <ListItemText primary="Tableaux" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      
    </Box>
  );
}
export default NavDash

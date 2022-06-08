import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Close, DragHandle, ListAltSharp, NetworkCheckRounded } from "@mui/icons-material";
import React from "react";

function NavDashMobile() {

  const [isDashOpen, setIsDashOpen] = React.useState(false)
  const newLeft = '-199px';

  return (
    <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
        <IconButton sx={{ position: 'absolute', zIndex: 9999, top: '60px' }} onClick={() => setIsDashOpen(!isDashOpen)}>
          {!isDashOpen ? <DragHandle /> : <Close />}
        </IconButton>
      <Box
        sx={{
          display: { xs: 'block', sm: 'block', md: 'none' },
          zIndex: 99,
          bgcolor: '#f5f5f5',
          margin: 0,
          position: 'absolute',
          top: '80px',
          transition: 'left 0.5s ease-in-out',
          left: isDashOpen ? 0 : newLeft
        }} >
        <nav aria-label="main dashboard folders" className="dashboard">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NetworkCheckRounded />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ListAltSharp />
                </ListItemIcon>
                <ListItemText primary="List" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />

      </Box>
    </Box>
  )
}

export default NavDashMobile
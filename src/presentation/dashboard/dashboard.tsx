import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import { Link, useLocation } from 'react-router-dom'; 
import { Menu as MenuIcon, Notifications as NotificationsIcon } from '@mui/icons-material';

// const navigation = [
//   { name: 'Dashboard', href: 'src/presentation/public/chatWithMe.tsx', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
//   { name: 'Chat With Me', href: '#', current: false },
// ];

const navigation = [
    { name: 'Dashboard', key: "dashboard", path: '/dashboard', current: true },
    // { name: 'Team', key: "team", path: '/team', current: false  },
    { name: 'Projects', key: "projects", path: '/projects', current: false  },
    { name: 'Calendar', key: "calendar", path: '/calendar', current: false  },
    { name: 'Chat With Me', key: "chat-with-me", path: '/chat-with-me', current: false  },
  ];

export default function Example() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#000' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, ml: 2, color: '#fff' }}>
          DTAVS
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
          {navigation.map((item) => (
            <Button
            key={item.key}
            component={Link}
            to={item.path}
            sx={{
              color: location.pathname === item.path ? '#fff' : '#aaa',
              backgroundColor: location.pathname === item.path ? '#333' : 'transparent',
              '&:hover': { backgroundColor: '#444' },
            }}
          >
            {item.name}
          </Button>
          ))}
        </Box>
        <IconButton color="inherit" sx={{ ml: 2 }}>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Tooltip title="Account settings">
          <IconButton onClick={handleMenuOpen} sx={{ p: 0, ml: 2 }}>
            <Avatar
              alt="Profile Picture"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ mt: '10px' }}
          PaperProps={{
            style: {
              width: '20ch',
              backgroundColor: '#333',
              color: '#fff',
            },
          }}
        >
          <MenuItem onClick={handleMenuClose}>Your Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>Sign out</MenuItem>
        </Menu>
      </Toolbar>
      {/* Mobile Menu */}
      {menuOpen && (
        <Box sx={{ display: { sm: 'none' }, flexDirection: 'column', backgroundColor: '#333' }}>
            {navigation.map((item) => (
            <Button
                key={item.key}
                component={Link}
                to={item.path}
                sx={{
                display: 'block',
                color: location.pathname === item.path ? '#fff' : '#aaa',
                backgroundColor: location.pathname === item.path ? '#444' : 'transparent',
                textAlign: 'left',
                width: '100%',
                px: 2,
                py: 1,
                '&:hover': { backgroundColor: '#555' },
                }}
                onClick={() => setMenuOpen(false)}
            >
                {item.name}
            </Button>
            ))}
        </Box>
      )}
    </AppBar>
  );
}

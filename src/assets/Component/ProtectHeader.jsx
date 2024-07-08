import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import Button1 from '../Screen/Button';
// import Button2 from '../Screen/Button1';
// import Button3 from '../Screen/Button2';
// import Button4 from '../Screen/Button3';
import Dropdown from '@mui/joy/Dropdown';

const pages = [<Button1 />, <Button2 />, <Button3 />, <Button4 />];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userData, setUserData] = React.useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  React.useEffect(() => {
    // Retrieve user data from localStorage on component mount
    const userDataString = localStorage.getItem('userData');
    const parsedUserData = JSON.parse(userDataString);
    setUserData(parsedUserData);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);

    if (setting === 'Logout') {
      // Clear authToken and userData from localStorage
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      // Redirect to the home page
      navigate('/');
    }
  };

  return (
    <AppBar
      sx={{
        backgroundColor: 'white',
        color: 'black',
        borderBottom: '2px solid rgb(214,107,64)',
        boxShadow: 'none',
        height: '90px',
        pl: '50px', // padding-left
        pr: '50px', // padding-right
        pt: '10px', // padding-top
        pb: '10px'
      }}
    >
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            href="#app-bar-with-responsive-menu"
            sx={{
              // ml: 6,
              display: { xs: 'none', md: 'flex' },
              // fontFamily: 'monospace',
              fontWeight: 500,
              fontSize: 20,
              letterSpacing: '0.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <span style={{ color: 'rgb(214,107,64)' }}>Tiffy</span>
            .com
          </Typography>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }} >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Dropdown>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Dropdown>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 400,
              fontSize: 20,
              letterSpacing: '5',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <span style={{ color: 'rgb(214,107,64)', fontFamily: 'Inknut Antiqua' }}>Tiffy</span>
            .com
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'right' }}>
            {pages.map((page, index) => (
              <Box key={index} sx={{ ml: 4 }}>
                {page}
              </Box>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, ml: 8, display: 'flex', alignItems: 'center' }}>
            {userData && (
              <>
                <Box sx={{ display: 'flex', alignItems: 'left',flexDirection:'column',ml:2 }}>
                  <Typography variant="body2" sx={{ color: 'grey', ml: 10 }}>Welcome!</Typography>
                  <Typography>{userData.email}</Typography>
                </Box>
                <Tooltip >
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

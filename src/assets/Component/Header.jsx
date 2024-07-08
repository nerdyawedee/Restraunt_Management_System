import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/joy/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Menu from '@mui/joy/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/joy/Container';
import Button from '@mui/joy/Button';
import Tooltip from '@mui/joy/Tooltip';
import MenuItem from '@mui/joy/MenuItem';
import Modal from '@mui/joy/Modal';
import LoginFinal from './Login.jsx';
import vector2 from '../images/Vector2.png';

const pages = ['Home', 'Explore', 'Section', 'Help'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '55%',
    left: '50%',
    width: '699px',
    transform: 'translate(-50%, -50%)',
    boxShadow: 'none', // No shadow here
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setIsMenuOpen(false);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ backgroundColor: 'white', color: 'black', borderBottom: '2px solid rgb(214,107,64)', boxShadow: 'none', height: '90px'}}>
      <Container maxWidth="xl" sx={{ marginTop: 1 }}>
        <Toolbar disableGutter>
          <Typography
            variant="h6"
            noWrap
            href="#app-bar-with-responsive-menu"
            sx={{
              ml: 6,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 500,
              fontSize: 20,
              // letterSpacing: '0.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <span style={{ color: 'rgb(214,107,64)' }}>Tiffy</span>
            .com
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 30 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block', backgroundColor: 'white', color: 'black', mx: 2, fontSize: '20px', fontWeight: '600', '&:hover': { backgroundColor: 'rgb(214,107,64,0.08)', color: 'rgb(214,107,64)' } }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <div>
                <Button startDecorator={<img src={vector2} alt="Vector Icon" style={{ height: 20 }} />} sx={{
                  borderRadius: 20,
                  backgroundColor: 'rgb(214,107,64)',
                  color: 'white',
                  padding: '10px 23px',
                  '&:hover': { bgcolor: 'rgb(214,107,64)' },
                  mr: 3,
                }}

                  onClick={handleOpen}>Login/Signup
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description" >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      <LoginFinal />
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

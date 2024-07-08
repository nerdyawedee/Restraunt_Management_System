import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import Login from '../Screen/Login';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useAuth } from '../Authentication/AuthContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const pages = [
    { id: 1, title: 'Home', scrollTo: 'first' },
    { id: 2, title: 'Explore', scrollTo: 'kit' },
    { id: 3, title: 'Section', scrollTo: 'club' },
    { id: 4, title: 'Join-Us', scrollTo: 'join' },
    // { id: 5,scrollTo:'pop' },pop
];
const settings = ['Profile', 'Account', 'Logout'];
function ResponsiveAppBar() {
    const { isLoggedIn, logout } = useAuth();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isSmallScreen ? '80%' : '50%',
        boxShadow: 'none',
        bgcolor: 'background.paper',
        p: 4,
    };

    // Example of checking if user is logged in (you may have your own logic)
    // const isLoggedIn = Boolean(localStorage.getItem('user'));
    // const userEmail = isLoggedIn ? JSON.parse(localStorage.getItem('user')).email : '';

    const getUserEmail = () => {
        const users = JSON.parse(localStorage.getItem('users')) || {};
        const userEmail = Object.keys(users)[0]; // Assuming there's only one user
        return userEmail;
    };

    // Usage
    const userEmail = getUserEmail();


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

    const handleCloseUserMenu = (setting) => {
        setAnchorElUser(null);
        if (setting === 'Logout') {
            logout();
            navigate('/');
        }
    };

    return (
        <AppBar sx={{ backgroundColor: 'white', color: 'black', borderBottom: '2px solid rgb(214,107,64)', boxShadow: 'none', height: '90px' }}>
            <Container sx={{ marginTop: 1 }}>
                <Toolbar disableGutter>
                    <Typography
                        variant="h6"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 500,
                            fontSize: 24,
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
                            aria-label="menu"
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
                                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                    <ScrollLink
                                        to={page.scrollTo}
                                        smooth={true}
                                        duration={500}
                                        offset={-90}
                                        style={{ textDecoration: 'none', color: 'black' }}
                                    >
                                        <Typography textAlign="center">{page.title}</Typography>
                                    </ScrollLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: '600px',
                            fontSize: 24,
                            color: 'inherit',
                            textDecoration: 'none',
                            mr: { xs: 10, md: '10px' },
                        }}
                    >
                        <span style={{ color: 'rgb(214,107,64)', fontFamily: 'Inknut Antiqua' }}>Tiffy</span>
                        .com
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: { lg: 30, xs: 0, md: 0 } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.id}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block', backgroundColor: 'white', color: 'black', mx: 2, fontSize: 15, fontWeight: '600', '&:hover': { backgroundColor: 'rgb(214,107,64,0.08)', color: 'rgb(214,107,64)' } }}
                            >
                                <ScrollLink
                                    to={page.scrollTo}
                                    smooth={true}
                                    duration={500}
                                    offset={-90}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    {page.title}
                                </ScrollLink>
                            </Button>
                        ))}
                    </Box>
                    <Box>
                        {isLoggedIn ? (
                            <>
                                <Box sx={{ flexGrow: 0, ml: 8, display: 'flex', alignItems: 'center' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'left', flexDirection: 'column', ml: 2 }}>
                                        <Typography variant="body2" sx={{ color: 'grey', ml: 10 }}>Welcome!</Typography>
                                        <Typography>{userEmail}</Typography>
                                    </Box>
                                    <Tooltip>
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        id="menu-appbar-user"
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
                                        {/* Example menu items for user settings */}
                                        {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                                                <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            </>
                        ) : (
                            <Button
                                sx={{
                                    borderRadius: 24,
                                    backgroundColor: 'rgb(214,107,64)',
                                    color: 'white',
                                    padding: '10px 23px',
                                    '&:hover': { bgcolor: 'rgb(214,107,64)' },
                                }}
                                onClick={handleOpen}
                            >
                                Login/Signup
                            </Button>
                        )}

                        <Modal
                            open={open}
                            onClose={handleClose}
                            sx={{ width: '60%', height: '100%', maxWidth: { lg: '1130px', xs: '20px' } }}
                        >
                            <Box style={style}>
                                <Typography id="modal-modal-title">
                                    <Login />
                                </Typography>
                            </Box>
                        </Modal>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;

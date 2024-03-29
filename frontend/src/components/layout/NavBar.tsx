import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useGetUserInfo, useUserLogout } from '../../hooks/userHooks';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  { name: 'Game', to: '/' },
  { name: 'Rule', to: '/rule' },
  { name: 'About', to: '/about' },
];

const detailPages = [
  { name: 'Profile', to: '/profile' },
  { name: 'History', to: '/history' },
  { name: 'Top Up', to: '/transaction' },
];

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const isAuthenticated = Boolean(Cookies.get('isAuthenticated'));

  const { data: userInfo } = useGetUserInfo(isAuthenticated);
  const { mutate: logout } = useUserLogout();

  const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(e.currentTarget);
  };

  const logoutHandler = () => {
    logout();
    Cookies.remove('isAuthenticated');
  };

  const stringAvatar = (name: string) => {
    return {
      children: `${name.split(' ')[0][0]}`,
    };
  };

  return (
    <AppBar
      position='static'
      sx={{
        background: 'var(--yellow)',
        color: 'var(--black)',
        height: {
          md: '4rem',
          xs: '3.5rem',
        },
      }}
      elevation={0}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'var(--black)',
              textDecoration: 'none',
            }}
          >
            EUROJACKPOT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              sx={{ bgcolor: 'var(--dark-yellow)', p: 1 }}
            >
              <MenuIcon sx={{ color: 'var(--black)' }} />
            </IconButton>
            <Menu
              id='menu-appbar'
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
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign='center'
                    onClick={() => {
                      navigate(`${page.to}`);
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant='h3'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              fontSize: '1rem',
              color: 'var(--black)',
              textDecoration: 'none',
            }}
          >
            EUROJACKPOT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => {
                  navigate(`${page.to}`);
                }}
                sx={{
                  my: 2,
                  color: 'var(--black)',
                  display: 'block',
                  fontWeight: 700,
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {isAuthenticated && userInfo && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={''}>
                <Button onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    sx={{ bgcolor: 'var(--dark-purple)' }}
                    alt={userInfo.data.data.name}
                    src={
                      userInfo.data.data?.photo
                        ? `./img/users/${userInfo.data.data.photo}`
                        : ''
                    }
                    {...stringAvatar(userInfo.data.data.name)}
                  />
                  <Typography
                    component={'span'}
                    sx={{
                      color: 'var(--black)',
                      margin: '0 1rem',
                    }}
                  >
                    <strong>{userInfo.data.data.gameAccount}.00 € </strong>
                  </Typography>
                </Button>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
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
                onClose={() => {
                  setAnchorElUser(null);
                }}
              >
                {detailPages.map((setting) => (
                  <MenuItem
                    key={setting.name}
                    onClick={() => {
                      navigate(`${setting.to}`);
                      setAnchorElUser(null);
                    }}
                  >
                    <Typography textAlign='center'>{setting.name}</Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={logoutHandler}>
                  <Typography textAlign='center'>Log Out</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}

          {!isAuthenticated && (
            <Button
              onClick={() => {
                navigate('/login');
              }}
              sx={{
                my: 2,
                color: 'var(--black)',
                display: 'block',
                fontWeight: 700,
              }}
            >
              Log In
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

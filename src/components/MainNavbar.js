import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Divider, IconButton, Link, Toolbar, Button } from '@material-ui/core';
import MenuIcon from '../icons/Menu';
import Logo from './Logo';
import AuthButton from "./authentication/AuthButton";

const MainNavbar = (props) => {
  const { onSidebarMobileOpen } = props;

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.secondary'
      }}
    >
      <Toolbar sx={{ minHeight: 64 }}>
        <IconButton
          color="inherit"
          onClick={onSidebarMobileOpen}
          sx={{
            display: {
              md: 'none'
            }
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <RouterLink to="/">
          <Box sx={{ mt: 1, pl: 1 }}>
            <Logo
              sx={{
                display: {
                  md: 'inline',
                  xs: 'none'
                },
                height: 40,
                width: 40
              }}
            />
          </Box>
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            alignItems: 'center',
            display: {
              md: 'flex',
              xs: 'none'
            }
          }}
        >
          <Button
            color="textSecondary"
            component={RouterLink}
            to="/"
            underline="none"
            variant="body1"
          >
            Alerts
          </Button>
          <Button
            color="textSecondary"
            component={RouterLink}
            to="/"
            underline="none"
            variant="body1"
          >
            Trips
          </Button>
          <Button
            color="textSecondary"
            component={RouterLink}
            to="/vehicles"
            underline="none"
            variant="body1"
          >
            Vehicles
          </Button>
          <Button
            color="textSecondary"
            component={RouterLink}
            to="/fleets"
            underline="none"
            variant="body1"
          >
            Fleets
          </Button>
          <Button
            color="textSecondary"
            component={RouterLink}
            to="/"
            underline="none"
            variant="body1"
          >
            Devices
          </Button>
          <Button
            color="textSecondary"
            component={RouterLink}
            to="/user"
            underline="none"
            variant="body1"
          >
            User
          </Button>
          <Divider
            orientation="horizontal"
            sx={{
              height: 32,
              mx: 1
            }}
          />
          <AuthButton />
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

MainNavbar.propTypes = {
  onSidebarMobileOpen: PropTypes.func
};

export default MainNavbar;

import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Drawer, Link } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Logo from './Logo';
import AuthButton from "./authentication/AuthButton";

const MainSidebar = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  return (
    <Drawer
      anchor="left"
      onClose={onMobileClose}
      open={!lgUp && openMobile}
      variant="temporary"
      PaperProps={{
        sx: {
          backgroundColor: 'background.default',
          width: 256
        }
      }}
    >
      <Box
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          p: 2
        }}
      >
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box
          sx={{
            display: 'flex',
            pb: 2,
            pt: 3
          }}
        >
          <Link
            color="textSecondary"
            component={RouterLink}
            to="/product"
            underline="none"
            variant="body1"
          >
            Product
          </Link>
        </Box>
        <Link
          color="textSecondary"
          component={RouterLink}
          to="/user"
          underline="none"
          variant="body1"
        >
          User
        </Link>
        <AuthButton />
      </Box>
    </Drawer>
  );
};

MainSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default MainSidebar;

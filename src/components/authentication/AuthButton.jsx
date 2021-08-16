import useAuth from "../../hooks/useAuth";
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const AuthButton = () => {
  const { isAuthenticated, logout } = useAuth();

  if (isAuthenticated) {
    return <Button
    color="primary"
    size="small"
    variant="contained"
    onClick={logout}
  >
    Logout
  </Button>
  }

  return <Button
    color="primary"
    component={RouterLink}
    to="/authentication/login"
    size="small"
    variant="contained"
  >
    Login
  </Button>
}

export default AuthButton
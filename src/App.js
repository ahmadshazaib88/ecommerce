import { useRoutes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import './i18n';
import RTL from './components/RTL';
import SplashScreen from './components/SplashScreen';
import useAuth from './hooks/useAuth';
import useScrollReset from './hooks/useScrollReset';
import routes from './routes';
import { createCustomTheme } from './theme';
import customTheme from "./theme/customTheme";

const App = () => {
  const content = useRoutes(routes);
  const auth = useAuth();

  useScrollReset();

  const theme = createCustomTheme({
    // direction: settings.direction,
    responsiveFontSizes: true,
    roundedCorners: true,
    // theme: settings.theme
  }, customTheme);

  return (
    <ThemeProvider theme={theme}>
      <RTL>
        <CssBaseline />
        <Toaster position="top-center" />
        {auth.isInitialized ? content : <SplashScreen />}
      </RTL>
    </ThemeProvider>
  );
};

export default App;

import { Suspense, lazy } from 'react';
import BrowseLayout from './components/BrowseLayout';
import GuestGuard from './components/GuestGuard';
import AuthGuard from './components/AuthGuard';
import LoadingScreen from './components/LoadingScreen';
import MainLayout from './components/MainLayout';

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

// Browse pages

const Browse = Loadable(lazy(() => import('./pages/browse/Browse')));
const BrowseButtons = Loadable(lazy(() => import('./pages/browse/BrowseButtons')));
const BrowseCharts = Loadable(lazy(() => import('./pages/browse/BrowseCharts')));
const BrowseColors = Loadable(lazy(() => import('./pages/browse/BrowseColors')));
const BrowseDetailLists = Loadable(lazy(() => import('./pages/browse/BrowseDetailLists')));
const BrowseForms = Loadable(lazy(() => import('./pages/browse/BrowseForms')));
const BrowseGridLists = Loadable(lazy(() => import('./pages/browse/BrowseGridLists')));
const BrowseGroupedLists = Loadable(lazy(() => import('./pages/browse/BrowseGroupedLists')));
const BrowseInputs = Loadable(lazy(() => import('./pages/browse/BrowseInputs')));
const BrowseModals = Loadable(lazy(() => import('./pages/browse/BrowseModals')));
const BrowseQuickStats = Loadable(lazy(() => import('./pages/browse/BrowseQuickStats')));
const BrowseTables = Loadable(lazy(() => import('./pages/browse/BrowseTables')));
const BrowseTypography = Loadable(lazy(() => import('./pages/browse/BrowseTypography')));

// Authentication pages

const Login = Loadable(lazy(() => import('./pages/authentication/Login')));
const PasswordReset = Loadable(lazy(() => import('./pages/authentication/PasswordReset')));
const Register = Loadable(lazy(() => import('./pages/authentication/Register')));

// Error pages

const AuthorizationRequired = Loadable(lazy(() => import('./pages/AuthorizationRequired')));
const NotFound = Loadable(lazy(() => import('./pages/NotFound')));
const ServerError = Loadable(lazy(() => import('./pages/ServerError')));

// EntityLayout
const Vehicles = Loadable(lazy(() => import('./pages/vehicles/Vehicles')));
const NewVehicle = Loadable(lazy(() => import('./pages/vehicles/NewVehicle')));
const Fleets = Loadable(lazy(() => import('./pages/fleets/Fleets')));
const Product = Loadable(lazy(() => import('./pages/product/Product')));
const User = Loadable(lazy(() => import('./pages/user/User')));

const Home = Loadable(lazy(() => import('./pages/Home')));

const routes = [
  {
    path: 'authentication',
    children: [
      {
        path: 'login',
        element: (
          <GuestGuard>
            <Login />
          </GuestGuard>
        )
      },
      {
        path: 'login-unguarded',
        element: <Login />
      },
      {
        path: 'password-reset',
        element: <PasswordReset />
      },
      {
        path: 'register',
        element: (
          // <GuestGuard>
            <Register />
          // </GuestGuard>
        )
      },
      {
        path: 'register-unguarded',
        element: <Register />
      },
    ]
  },
  {
    path: '*',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: (
          <AuthGuard>
            <Home />
          </AuthGuard>
        )
      },
      {
        path: 'vehicles',
        children: [
          {
            path: '/',
            element: (
              <AuthGuard>
                <Vehicles />
              </AuthGuard>
            )
          },
          {
            path: 'new',
            element: (
              <AuthGuard>
                <NewVehicle />
              </AuthGuard>
            )
          }
        ]
      },
      {
        path: 'fleets',
        element: (
          <AuthGuard>
            <Fleets />
          </AuthGuard>
        )
      },
      {
        path: 'product',
        element: <Product />
      },
      {
        path: 'user',
        element: (
          <AuthGuard>
            <User />
          </AuthGuard>
        )
      },
      {
        path: 'browse',
        element: <BrowseLayout />,
        children: [
          {
            path: '/',
            element: <Browse />
          },
          {
            path: '/buttons',
            element: <BrowseButtons />
          },
          {
            path: '/inputs',
            element: <BrowseInputs />
          },
          {
            path: '/charts',
            element: <BrowseCharts />
          },
          {
            path: '/colors',
            element: <BrowseColors />
          },
          {
            path: '/data-display/detail-lists',
            element: <BrowseDetailLists />
          },
          {
            path: '/data-display/quick-stats',
            element: <BrowseQuickStats />
          },
          {
            path: '/data-display/tables',
            element: <BrowseTables />
          },
          {
            path: '/forms',
            element: <BrowseForms />
          },
          {
            path: '/modals',
            element: <BrowseModals />
          },
          {
            path: '/lists/grouped-lists',
            element: <BrowseGroupedLists />
          },
          {
            path: '/lists/grid-lists',
            element: <BrowseGridLists />
          },
          {
            path: '/typography',
            element: <BrowseTypography />
          }
        ]
      },
      {
        path: '401',
        element: <AuthorizationRequired />
      },
      {
        path: '404',
        element: <NotFound />
      },
      {
        path: '500',
        element: <ServerError />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];

export default routes;
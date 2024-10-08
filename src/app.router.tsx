import { PagePath } from '@common';
import HomePage from '@pages/home';
import MainPage from '@pages/main';
import RootPage from '@pages/root';
import SignInPage from '@pages/signin';
import SignOutPage from '@pages/signout';
import SignUpPage from '@pages/signup';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const AppRouter = createBrowserRouter([
  {
    path: PagePath.Root,
    element: <RootPage />,
    children: [
      {
        path: PagePath.Home,
        element: <HomePage />,
      },
      {
        path: PagePath.Main,
        element: <MainPage />,
      },
      {
        path: PagePath.SignIn,
        element: <SignInPage />,
      },
      {
        path: PagePath.SignUp,
        element: <SignUpPage />,
      },
      {
        path: PagePath.SignOut,
        element: <SignOutPage />,
      },
    ],
  },
  {
    path: PagePath.NotFound,
    element: <Navigate to={PagePath.Home} />,
  },
]);

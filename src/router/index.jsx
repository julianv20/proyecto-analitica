import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';
import { LayoutHome } from '../layout/LayoutHome';
import { HomePage } from '../pages/home/HomePage';
import { FormPage } from '../pages/form/FormPage';
import { FormServices } from '../pages/form/empresa1/FormServices';
import { PublicRoute } from './PublicRoute';
import { ProtectedRoute } from './ProtectedRoute';
import { Dashbards } from '../pages/dashboards/Dashbards';
import { GraphServices } from '../pages/dashboards/GraphServices';

export const router = createBrowserRouter([
  {
    path: '/auth/login',
    element: <PublicRoute element={<LoginPage />} />,
  },

  {
    // path: '/',
    element: <ProtectedRoute element={<LayoutHome />} />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },

  {
    path: 'analitica',
    element: <ProtectedRoute element={<LayoutHome />} />,
    children: [
      {
        index: true,
        element: <Dashbards />,
      },
      {
        path: 'services/:id',
        element: <GraphServices />,
      },
    ],
  },

  {
    path: 'form',
    element: <ProtectedRoute element={<LayoutHome />} />,
    children: [
      {
        index: true,
        element: <FormPage />,
      },
      {
        path: '1',
        element: <FormServices />,
      },
    ],
  },

  {
    path: 'register',
    element: <ProtectedRoute element={<LayoutHome />} />,
    children: [
      {
        path: 'agente',
        element: <RegisterPage />,
      },
    ],
  },
]);

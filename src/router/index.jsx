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
import { ServicesReport } from '../pages/dashboards/odontologia/ServicesReport';
import { ClientesReport } from '../pages/dashboards/odontologia/ClientesReport';
import { CitasReport } from '../pages/dashboards/odontologia/CitasReport';
import { InsumosReport } from '../pages/dashboards/odontologia/InsumosReport';

export const router = createBrowserRouter([
  {
    path: '/auth/login',
    element: <PublicRoute element={<LoginPage />} />,
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
    path: 'analitica/:id',
    element: <ProtectedRoute element={<LayoutHome />} />,
    children: [
      {
        index: true,
        element: <Dashbards />,
      },
      {
        path: 'odontologia/cantidaddeserviciosvendidos/:id',
        element: <ServicesReport />,
      },
      {
        path: 'odontologia/clientesporservicio/:id',
        element: <ClientesReport />,
      },
      {
        path: 'odontologia/citasasignadas/:id',
        element: <CitasReport />,
      },
      {
        path: 'odontologia/insumos/:id',
        element: <InsumosReport />,
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
        path: ':id',
        element: <FormServices />,
      },
    ],
  },
]);

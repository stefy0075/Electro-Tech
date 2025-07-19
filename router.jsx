import { createBrowserRouter } from 'react-router-dom';
import Layout from './src/layout/layout';
import Home from './src/pages/home'; // Asegúrate de que la ruta sea correcta

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, // Esta es la ruta principal
      // Puedes agregar más rutas aquí
    ],
  },
]);

export default router;

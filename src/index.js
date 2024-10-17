import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const root = ReactDom.createRoot(document.getElementById('root'));
import './index.css';
import Home from './views/home/home';
import About from './views/about/about';
 const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <contact />
    }
 ]);
 root.render(<RouterProvider router={router} />);
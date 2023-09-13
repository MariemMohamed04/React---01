import logo from './logo.svg';
import './App.css';
import MasterLayout from './component/masterLayout/MasterLayout';
import Home from './component/home/Home';
import About from './component/about/About';
import Portfolio from './component/portfolio/Portfolio';
import Contact from './component/contact/Contact';
import NotFound from './component/notFound/NotFound';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '', element: <MasterLayout />, children: [
      { path: 'home', element: <Home /> },
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound/> },
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

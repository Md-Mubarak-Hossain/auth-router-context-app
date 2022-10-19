import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRouter from './components/Private/PrivateRouter';
import Order from './components/Order';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <PrivateRouter><Home></Home></PrivateRouter>
        },
        {
          path: '/order',
          element: <PrivateRouter><Order></Order></PrivateRouter>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

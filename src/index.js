import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App';
import Details from './Components/Details/Details'


const router = createBrowserRouter([
  {
    path: "/myprojects/",
    element: <App/>
  },
  {
    path: "/myprojects",
    element: <App/>
  },
  // {
  //   path: "/login",
  //   element: <Login/>
  // },
  // {
  //   path: "/register",
  //   element: <Register/>
  // },
  // {
  //   path: "/start",
  //   element: <Start/>
  // },
  {
    path: "myprojects/details",
    element: <Details/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




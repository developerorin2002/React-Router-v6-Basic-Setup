import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Friends from './components/Home/Friends';
import Home from './components/Home/Home';
import HomeLayout from './HomeLayout/HomeLayout';
import Products from './components/Products/Products'
const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<HomeLayout></HomeLayout>,
      children:[
        {
          path:'/friend',
          element:<Friends></Friends>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/product',
          element:<Products></Products>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
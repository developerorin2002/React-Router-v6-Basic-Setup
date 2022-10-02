import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Friends from './components/Friends/Friends';
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
          loader :()=>{
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element:<Friends></Friends>,
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
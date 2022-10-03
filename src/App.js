import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import HomeLayout from './HomeLayout/HomeLayout';
import Products from './components/Products/Products'
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
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
        },
        {
          path:'/friend/:friendId',
          element:<FriendDetails></FriendDetails>,
          loader:async ({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          }
        },
        {
          path:'/posts',
          element:<Posts></Posts>,
          loader: async ()=>{
            return fetch ('https://jsonplaceholder.typicode.com/posts')
          }
        },
        {
          path:'/posts/:postId',
          element:<PostDetails></PostDetails>,
          loader: async ({params})=>{
            console.log(params.postId);
            return fetch (`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          }
        }
      ]
    },
    {
      path:'*',
      element: <div><h1>404 NOT FOUND</h1></div>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
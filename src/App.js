import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './component/About/About';
import Contac from './component/Contac/Contac';
import Friends from './component/Friends/Friends';
import FriendsDetails from './component/FriendsDetails/FriendsDetails';
import Home from './component/Home/Home';
import Main from './component/layout/Main';


const App = () => {
  const getRouter = createBrowserRouter([
    {
      path: '/', element:
        <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/contac', element: <Contac></Contac> },
        { path: '/about', element: <About></About> },
        {
          path: '/friends',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')

          },

          element: <Friends></Friends>
        },
        {
          path: '/friend/:friendId',
          loader: async({params})=>{
            // console.log(params.friendId)
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendsDetails></FriendsDetails>
        },
      ]
    },
    { path: '*', element: <h2>404 NOT FOUND</h2> }

  ])
  return (
    <div className='App'>
      <Outlet></Outlet>
      <RouterProvider router={getRouter}></RouterProvider>
    </div>
  );
};

export default App;
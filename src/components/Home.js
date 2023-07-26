import React from 'react'

//components
import MiniDrawer from './MiniDrawer'
import Notes from './notes/Notes'
import { Box } from '@mui/material'
import { Route,Routes } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';


function Home() {
    const routes = [{
        path: '/',
        element: <SignIn/>,
      }, {
        path: '/mainpage',
        element: <Box style={{display: 'flex', width: '100%', flexDirection: 'column', marginLeft: '100px'}}><MiniDrawer/><Notes/></Box>,
      }, {
        path: '/SignUp',
        element: <SignUp/>,      
      },  ];
      const routeComponents = routes.map(({path, element}, key) => <Route exact path={path} element={element} key={key} />);

    return (
        <>
        <Routes>
        {routeComponents}
        </Routes>
        </>
    )
}

export default Home

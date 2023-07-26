import React from 'react'

//components
import MiniDrawer from './MiniDrawer'
import Notes from './notes/Notes'
import { Box } from '@mui/material'
import { Route,Routes } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';


function Home() {
    return (
        <>
        <Routes>
        <Route path = "/" element = {<SignIn/>}/>
            
        <Route path ="/mainpage" element = {<Box style={{display: 'flex', width: '100%', flexDirection: 'column', marginLeft: '100px'}}>
            
            <MiniDrawer/>
            <Notes/>

        </Box>}/>
        <Route path = "/SignUp" element = {<SignUp/>}/>        
        </Routes>    
        </>
    )
}

export default Home

import React from 'react'

//components
import MiniDrawer from './MiniDrawer'
import Notes from './notes/Notes'
import { Box } from '@mui/material'

function Home() {
    return (
        <Box style={{display: 'flex', width: '100%', flexDirection: 'column', marginLeft: '100px'}}>
            <MiniDrawer/>
            <Notes/>

        </Box>
    )
}

export default Home

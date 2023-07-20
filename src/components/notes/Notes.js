import React from 'react'
import {Box} from '@mui/material'

//component
import Form from './Form'
import HeaderBar from '../HeaderBar'

function Notes() {
    return (
        <Box sx = {{display: "flex"}}>
            <Box sx = {{p:3, width : '100%'}}>
                <HeaderBar/>
                <Form/>
            </Box>
        </Box>
    )
}

export default Notes

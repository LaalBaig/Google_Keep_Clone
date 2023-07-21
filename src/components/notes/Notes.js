import React from 'react'
import {Box} from '@mui/material'

//component
import Form from './Form'
import HeaderBar from '../HeaderBar'
import BasicCard from '../Card'

function Notes() {
    return (
        <Box sx = {{display: "flex"}}>
            <Box sx = {{marginBottom: '30px', width : '100%'}}>
                <HeaderBar/>
                <Form/>
                <br/>
                <Box sx = {{display: "flex", flexWrap: 'wrap'}}>
                <BasicCard/>
                </Box>
            </Box> 
        </Box>
    )
}

export default Notes

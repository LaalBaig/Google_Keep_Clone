import React, { useRef, useState, useContext } from 'react'
import {Box, TextField, ClickAwayListener} from '@mui/material'
import {styled} from '@mui/material/styles'

import { DataContext } from '../../context/DataProvider'

const Container = styled(Box)
`display : flex;
flex-direction: column;
width: 600px;
box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%) , 0 2px 6px 2px rgb(60 64 67/ 15%);
margin-top: 100px;
border-radius: 5px;
min-height: 30px;
`

const note = {
    heading: '',
    body:''
}

function Form() {
    const [showTextField, setShowTextField] = useState(false)
    const containerRef = useRef();
    const [addNote , setAddNote] = useState(note)

    // const [notes, setNotes] = useContext(DataContext)

    const displayField = () => {
        setShowTextField(true)
        containerRef.current.style.minHeight = '90px'
    }
    const handleClickAway = () => {
        setShowTextField(false)
        containerRef.current.style.minHeight = '30px'
        // setNotes(addNote)
    }



    return (
        <ClickAwayListener onClickAway={handleClickAway}>
        <Container ref = {containerRef}>
        {showTextField &&
            <TextField
            placeholder='Title'
            variant='standard'
            InputProps={{disableUnderline: true}}
            style = {{marginBottom: 10,paddingLeft: '10px' }}
            /> }
            <TextField
            placeholder='Add a Note:'
            variant='standard'
            InputProps={{disableUnderline: true}}
            style = {{marginBottom: 10, paddingLeft: '10px'}}    
            onClick={displayField}
            multiline
            />
        </Container> 
        </ClickAwayListener>
    )
}

export default Form

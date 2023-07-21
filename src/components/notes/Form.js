import React, { useContext, useRef, useState,  } from 'react'
import {Box, TextField, ClickAwayListener} from '@mui/material'
import {styled} from '@mui/material/styles'
import { DataContext } from '../../App'


const Container = styled(Box)
`display : flex;
flex-direction: column;
width: 600px;
box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%) , 0 2px 6px 2px rgb(60 64 67/ 15%);
margin-top: 100px;
border-radius: 5px;
min-height: 30px;
`

function Form() {
    const [showTextField, setShowTextField] = useState(false)
    const containerRef = useRef();
    const {setNoteData}= useContext(DataContext)
    const [addNote , setAddNote] = useState({heading: '',body:''})


    const displayField = () => {
        setShowTextField(true)
        containerRef.current.style.minHeight = '90px'
    }
    const handleClickAway = () => {
        setShowTextField(false)
        containerRef.current.style.minHeight = '30px'
        if(addNote.body !== '' || addNote.heading !== ''){
            setNoteData((prevArr) => ([
            ...prevArr,{heading: addNote.heading,body:addNote.body}]
            ))
        setAddNote({heading: '',body:''})
        
        }
    }
    const onTextChange = (e) => {
        console.log(e)
        //const changedNote = {...addNote, [e.target.name]: [e.target.value]}
            setAddNote((pre)=>({
                ...pre,
                [e.target.name]: e.target.value
            }))

            
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
            onChange={(e) => onTextChange(e)}
            name='heading'
            value={addNote.heading}
            /> }
            <TextField
            placeholder='Add a Note:'
            variant='standard'
            InputProps={{disableUnderline: true}}
            style = {{marginBottom: 10, paddingLeft: '10px'}}    
            onClick={displayField}
            multiline
            onChange={(e) => onTextChange(e)}
            name='body'
            value={addNote.body}
            />
        </Container> 
        </ClickAwayListener>
    )
}

export default Form

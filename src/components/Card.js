import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DataContext } from '../App';
import { useContext } from 'react';

export default function BasicCard() {
    const {noteData} = useContext(DataContext)
  return (
    <>
    {
            noteData.map((val,i)=>{
            
            return( <Card sx={{ maxWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {noteData[noteData.length - 1 -i].heading}
                  </Typography>
                  <br/>
                  <Typography variant="body2">
                    {noteData[noteData.length - 1 -i].body}
                  </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
              </Card> )
        })
    
   
    }
    </>
  );
}

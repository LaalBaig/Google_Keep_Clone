import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DataContext } from '../App';
import { useContext,createContext } from 'react';

export const TimeContext = createContext()


export default function BasicCard() {
    const {noteData} = useContext(DataContext)
    // const [time, setTime] = useState()
  return (

    <>
    {
            noteData?.length>0&&noteData?.map((val,i)=>{
            
            return( <Card key={i} sx={{ maxWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {noteData[noteData.length - 1-i].heading}
                  </Typography>
                  <br/>
                  <Typography variant="body2">
                    {noteData[noteData.length - 1-i].body}
                  </Typography>
                </CardContent>
                <div style={{width: '100%'}}>
                <CardActions sx = {{bottom:'0'}}>
                  {noteData[noteData.length -1 - i].date}
                </CardActions>
                </div>
              </Card> )
        })
    
   
    }
    </>
  );
}

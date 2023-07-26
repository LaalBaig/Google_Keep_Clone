import { createContext, useEffect, useState } from 'react';
import './App.css';

//material UI assets
//components
import Home from './components/Home';

export const DataContext = createContext()

function App() {
  const [noteData, setNoteData] = useState([])

  useEffect(()=>{
    const a = JSON.parse(localStorage.getItem('note'))
    console.log("storage data: ",a)
    a && setNoteData(a) ;
  }, [])

  return (
    <DataContext.Provider value = {{noteData, setNoteData}}>
      
    <Home/>
    </DataContext.Provider>
  );
}
export default App;

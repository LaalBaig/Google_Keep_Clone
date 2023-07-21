import { createContext, useState } from 'react';
import './App.css';

//material UI assets
//components
import Home from './components/Home';

export const DataContext = createContext()

function App() {
  const [noteData, setNoteData] = useState([])


  return (
    <DataContext.Provider value = {{noteData, setNoteData}}>
    <Home/>
    </DataContext.Provider>
  );
}
export default App;

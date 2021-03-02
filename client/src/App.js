import './App.css';
import './views/contacts.css';
import React,{useState} from 'react';
import ListContacts from './components/ListContacts';
import ReadContact from './components/ReadContact';

function App() {
  const [table,setTable] = useState([]);
  const [update,setUpdate] = useState(false);
  const [selectedID,setSelectedID] = useState(0);

  return (
    <div className="App">
      {selectedID ? 
        <ReadContact
          table={table}
          setTable={setTable}
          update={update}
          setUpdate={setUpdate}
          selectedID={selectedID}
          setSelectedID={setSelectedID}
        /> :
        <ListContacts
          table={table}
          setTable={setTable}
          update={update}
          setUpdate={setUpdate}
          selectedID={selectedID}
          setSelectedID={setSelectedID}
        />
      }
    </div>
  );
}

export default App;

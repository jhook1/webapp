import React,{useEffect} from 'react';
import axios from 'axios';
import PostContact from './PostContact';
import '../views/ListContacts.style.css';

const ListContacts = (props) => {
  const setTable = props.setTable;
  const setSelectedID = props.setSelectedID;
  const update = props.update;
  const setUpdate = props.setUpdate;

  useEffect(()=>{
    const handleClick = (e) => {
      setSelectedID(e.target.parentElement.id);
    }

    const fetchData = async () => {
      let data = await axios.get("http://localhost:9000/api")
        .catch(err=>console.error('error: ',err.message));

      data = data.data.map((contact)=>{
        return(
          <tr key={contact.id} id={contact.id} onClick={handleClick}>
            <td>{contact.id}</td>
            <td>{contact.first_name}</td>
            <td>{contact.last_name}</td>
          </tr>
        );
      });

      setTable(data);
    }

    fetchData();
    
  },[update,setTable,setSelectedID]);

  return ([
    <table key={'table'} className="selectTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>{props.table}</tbody>
    </table>,
    <br key={'break'}/>,
    <PostContact
      key={'add'}
      selectedID={props.selectedID}
      update={update} 
      setUpdate={setUpdate}
      method={'Add Contact'}
    />
  ]);
}

export default ListContacts;
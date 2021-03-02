import React,{useEffect} from 'react';
import axios from 'axios';
import DeleteContact from './DeleteContact';
import PostContact from './PostContact';

const ReadContact = (props) => {
    const setTable = props.setTable;
    const selectedID = props.selectedID;
    const setSelectedID = props.setSelectedID;
    const update = props.update;
    const setUpdate = props.setUpdate;

    const handleClick = (e) => {
        setSelectedID(0);
    }

    useEffect(()=>{
        const fetchData = async () => {
            let data = await axios.get(`http://localhost:9000/api/id=${selectedID}`)
                .catch(err=>console.error('error: ',err.message));
            
            data = data.data.map((contact)=>{
                return(
                <tr key={contact.id}>
                    <td>{contact.id}</td>
                    <td>{contact.first_name}</td>
                    <td>{contact.last_name}</td>
                    <td>{contact.nick_name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                </tr>
                );
            });

            setTable(data);
        }

        fetchData();
        
    },[update,setTable,selectedID]);

    return ([
        <table key={'table'}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Nick Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>{props.table}</tbody>
        </table>,
        <br key={'break'}/>,
        <button key={'back'} onClick={handleClick}>Back</button>,
        <DeleteContact
            key={'delete'} 
            selectedID={selectedID}
            setSelectedID={setSelectedID}
            update={update}
            setUpdate={setUpdate}
        />,
        <PostContact
            key={'update'}
            selectedID={selectedID}
            update={update} 
            setUpdate={setUpdate}
            method={'Update Contact'}
        />
    ]);
}

export default ReadContact;
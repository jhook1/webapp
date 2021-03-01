import React from 'react';
import axios from 'axios';

const DeleteContact = (props) => {
    const handleClick = (e) => {
        axios.delete(`http://localhost:9000/api/id=${props.selectedID}`)
            .catch(err=>console.error('error: ',err.message));
        
        props.setSelectedID(0);
        props.setUpdate(!props.update)
    }

    return(<button onClick={handleClick}>Delete Contact</button>);
}

export default DeleteContact;
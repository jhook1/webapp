import React,{useState} from 'react';
import axios from 'axios';

const PostContact = (props) => {
  const [form, setForm] = useState({
      first_name: '',
      nick_name: '',
      last_name: '',
      email: '',
      phone: ''
  });

  const [postBtnClicked,setPostBtnClicked] = useState(false);

  const [btnTxt,setBtnTxt] = useState({submit: props.method, cancel: 'Cancel'}); //Avoids warning about controlled/uncontrolled state for button text

  const handleChange = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    setForm({...form,[name]: val});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(props.selectedID){
        axios.post(`http://localhost:9000/api/id=${props.selectedID}`,form)
            .catch(err=>console.error('error: ',err.message));
    }
    else{
        axios.post("http://localhost:9000/api",form)
            .catch(err=>console.error('error: ',err.message));
    }
    

    setForm({
      first_name: '',
      nick_name: '',
      last_name: '',
      email: '',
      phone: ''
    });

    props.setUpdate(!props.update);

    setBtnTxt({submit: props.method, cancel: 'Cancel'}); //Again, just avoids warning for unused var related to previous warning workaround
  }

  const handleReset = (e) => {
    e.preventDefault();

    setForm({
      first_name: '',
      nick_name: '',
      last_name: '',
      email: '',
      phone: ''
    });

    setPostBtnClicked(false);
  }

  const handleClick = (e) => {
    setPostBtnClicked(true);
  }
  
  if(postBtnClicked){
    return([
        <br key={'break1'}/>,
        <br key={'break2'}/>,
        <form key={'form'} onSubmit={handleSubmit} onReset={handleReset}>
            <label>
            First Name:
            <input type='text' name='first_name' onChange={handleChange} value={form.first_name} required/>
            </label>
            <br/>
            <label>
            Nick Name:
            <input type='text' name='nick_name' onChange={handleChange} value={form.nick_name}/>
            </label>
            <br/>
            <label>
            Last Name:
            <input type='text' name='last_name' onChange={handleChange} value={form.last_name} required/>
            </label>
            <br/>
            <label>
            Email:
            <input type='text' name='email' onChange={handleChange} value={form.email}/>
            </label>
            <br/>
            <label>
            Phone Number:
            <input type='text' name='phone' onChange={handleChange} value={form.phone}/>
            </label>
            <br/>
            <br/>
            <input type='submit' value={btnTxt.submit}/>
            <input type='reset' value={btnTxt.cancel}/>
        </form>
    ]);
  }
  else{
    return(<button onClick={handleClick}>{btnTxt.submit}</button>);
  }
}

export default PostContact;
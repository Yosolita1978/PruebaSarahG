import React , { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

  
const Form = (props) => {
    const [nameObject, setNameObject] = useState({name: "", age: "", count: ""});

    const handleInput = (event) =>{
        event.preventDefault();
        let username = event.target.value;
        //console.log(username);
        setNameObject((nameObject) => ({...nameObject, name:username}));
    }

    // GET request! 
    const handleSubmit = (event) => {
        event.preventDefault();
        const URL = `https://api.agify.io?name=${nameObject.name}`;
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            setNameObject(data);
            props.onSubmit(data);
        })
    
}

  return (
    <div className="form-wrapper">
    <form className="name-submit-form">
      <TextField 
      id="outlined-basic" 
      label="Name"
      vale={nameObject.name}
      onChange={handleInput}
      variant="outlined" >
      </TextField>

      <Button 
      id="submit-button" 
      variant="contained"
      type="submit"
      onClick={handleSubmit}
      aria-label="button to submit form">
        Submit
      </Button>
    </form>
  </div>
  )
}


export default Form;
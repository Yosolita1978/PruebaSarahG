
import './App.css';
import React , { useState } from "react";
import Form from './components/form';

function App() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [response, setResponse] = useState({name: "", age: "", count: ""});

    //sending this function as a prop to the child
  const handleOnSubmit = (data) => {
      setIsSubmited(true);
      console.log(data);
      setResponse(data);
    };


  return (
    <div className="App">
      <h5>Hello Techtonica</h5>
      <Form isSubmited={isSubmited} onSubmit={handleOnSubmit} />
      {isSubmited ? (
        <h3 className="sucess-message">
          Sucess! Thank you {response.name}!
        </h3>
      ) : null}
    </div>
  );
}

export default App;

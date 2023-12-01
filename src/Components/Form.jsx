import React, {useState} from "react";

const Form = () => {

  const [contact, setContact] = useState({
    userName: '',
    userEmail: ''
  });

  const [message, setMessage] = useState('');

  const validations = () => {
    const emailTest = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    if(contact.userName.length > 5 && emailTest.test(contact.userEmail)){
      setMessage(`Gracias ${contact.userName}, te contactaremos cuanto antes vía mail`);
    }else{
      setMessage("Por favor verifique su información nuevamente")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validations()
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input required type="text" name='name' placeholder="Fullname" onChange={(e) => setContact({...contact, userName: e.target.value})}></input>
        <input equired type="email" name='email' placeholder="Email" onChange={(e) => setContact({...contact, userEmail: e.target.value})}></input>
        <button type="submit">Send</button>
        </form>
      <h3>{message}</h3>
    </div>
  );
};

export default Form;

import { useEffect, useState } from 'react';
import { Messages } from './Messages';

export const SimpleForm = () => {
  
  const [formState, setFormState] = useState({
    username:"juan",
    email: "juancarlos@gmail.com"
  })
  const {username, email} = formState;

  const handelInputChange = ({target}) =>{
   const {name, value } = target;
   setFormState({
    ...formState,
    [name]: value
   })
  }

  useEffect(() => {
    // console.log("useEffect called!!");
  }, [])

  useEffect(() => {
    // console.log("useEffect called formState!!");
  }, [formState])

  useEffect(() => {
    // console.log("useEffect called formState!!");
  }, [email])
    
  

  return (
    <>
    <h1>Simple Form</h1>
    <hr />
    <input 
      type="text"
      className="form-control"
      placeholder="Username"
      name="username"
      value={username}
      onChange={handelInputChange}
    />
    { username === 'juan2' && <Messages />} 
     <input 
      type="email"
      className="form-control mt-3"
      placeholder="email@gmail.com"
      name="email"
      value={email}
      onChange={handelInputChange}
    />
    </>
  )
}

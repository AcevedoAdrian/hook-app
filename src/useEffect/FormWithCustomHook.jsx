import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  
  const {formState , handelInputChange , username, email, password} = useForm({
      username:"",
      email: "",
      password: ""
  })

  // const {username, email, password} = formState;

  return (
    <>

    <h1>Form With Custom Hook</h1>
    <hr />

    <input 
      type="text"
      className="form-control"
      placeholder="Username"
      name="username"
      value={username}
      onChange={handelInputChange}
    />
    
    { 
      username === 'juan2' && <Messages />
    } 
    
    <input 
      type="email"
      className="form-control mt-3"
      placeholder="email@gmail.com"
      name="email"
      value={email}
      onChange={handelInputChange}
    />

    <input 
      type="text"
      className="form-control mt-3"
      placeholder="Password"
      name="password"
      value={password}
      onChange={handelInputChange}
    />
    
    </>
  )
}

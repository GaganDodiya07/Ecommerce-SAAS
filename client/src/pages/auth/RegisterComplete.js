import React,{useState, useEffect} from "react";
import {toast } from 'react-toastify';
import {auth,signInWithEmailLink,isSignInWithEmailLink} from '../../firebaseAuth';
import {useNavigate} from 'react-router-dom';


const RegisterComplete = () => {
  const[email, setEmail] = useState('');
  const [password,setPassword] = useState("");
  const nav = new useNavigate ();

  useEffect(() => {
      setEmail(window.localStorage.getItem("emailForRegistration"));
  },[]);

  const handleSubmit=  async (e) => {
    e.preventDefault()

    //config
    //validation
    if(!email || !password) {
      toast.error("Email and Password required");
      return;

    }
    if (password.length < 6){
      toast.error("Password must be atleast 6 character long");
      return;
    }

    try {
      console.log("hello");
      const result = await auth.signInWithEmailLink(
        auth,
      email,
      window.localStorage.href
      );
     console.log(result);

     if(isSignInWithEmailLink (auth,window.location.href)) {
      //remove user email from local storage
      window.localStorage.removeItem("emailForRegistration");

      // get user id token
      let user = auth.currentUser;

     // user.updatePassword(password);

      const idTokenResult = await user.getIdToken();

      //redux store
      console.log("User", user , "IdTokenResult" ,idTokenResult);

      //redirect
      // history.push('/');
      nav('/');
     }
    }
    catch(error){
    console.log(error);
    toast.error(error.message);
    }

  };


  const completeRegistrationForm = () =>(
    <form onSubmit={handleSubmit}>
        <input type='email' className='form-control' value={email}
        />
      <input 
      type ="password"
      className="form-control"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='Password'
      autoFocus
      />
      <button type='submit' className='btn btn-raised'>
        Complete Registration
      </button>
    </form>
  )
  return (
    <div className='container' >
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h3>Register</h3>
          
          {completeRegistrationForm()}

        </div>
      </div>
      
    </div>
  );
}

export default RegisterComplete;

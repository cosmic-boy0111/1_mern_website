import React, { useState,useContext } from "react";
import loginPic from "../images/undraw_unlock_24mb (1).svg";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../App";

const Login = () => {

  const {state,dispatch} = useContext(UserContext)

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const loginUser = async (e) =>{
    e.preventDefault();
    const res = await fetch('/signin',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            email,password
        })

    })

    const data = res.json();

    if(res.status === 400 || !data){
        window.alert('invalid credentials');
        console.log('invalid credentials');
    }else{
        dispatch({type:'USER',payload:true})
        window.alert('user sign in successfully');
        console.log('user sign in successfully');
        history.push('/')
    }

  }

  return (
    <>
      <section className="signin">
        <div className="signin_container">
          <div className="signup_logo">
            <figure>
              <img src={loginPic} alt="" />
            </figure>
            <NavLink to="/signup" className="already-register">
              Create an Account
            </NavLink>
          </div>
          <div className="signup_form_container">
            <h1 className="signup_header"> Sign In </h1>
            <form className="form_container" method="POST" onSubmit={loginUser}>
              <div className="form_field">
                <label for="email" class="form-label">
                  
                  <EmailIcon />
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  autoComplete="off"
                  name='email'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              <div className="form_field ">
                <label for="password" class="form-label">
                  
                  <LockOpenIcon />
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="off"
                  name='password'
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>

              <Button type='submit' variant="contained" color="primary" >
                log in
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

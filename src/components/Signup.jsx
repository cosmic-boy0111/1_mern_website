import React, { useState } from "react";
import signpic from "../images/undraw_press_play_bx2d.svg";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import { NavLink,useHistory } from "react-router-dom";

const Signup = () => {

  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) =>{
    e.preventDefault();
    const {name,email,phone,work,password,cpassword} = user;
    const res = await fetch('/register',{
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    })

    const data = await res.json();
    if(res.status === 422 || !data){
      window.alert('INVALID REGISTRATION');
      console.log('registration failed');
    }else{
      window.alert(' REGISTRATION complete');
      console.log('registration complete');
      history.push('/login');
    }
  }

  return (
    <>
      <section className="signup">
        <div className="signup_container">
          <div className="signup_form_container">
            <h1 className="signup_header"> Sign Up </h1>
            <form method="POST" className="form_container" >
              <div className="form_field">
                <label for="name" class="form-label">
                  <PersonIcon />
                </label>
                <input
                  type="text"
                  id="name"
                  name='name'
                  onChange={handleInputs}
                  value={user.name}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form_field">
                <label for="email" class="form-label">
                  <EmailIcon />
                </label>
                <input
                  type="email"
                  id="email"
                  name='email'
                  onChange={handleInputs}
                  value={user.email}
                  placeholder="Your Email"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form_field ">
                <label for="phone" class="form-label">
                  <PhoneIphoneIcon />
                </label>
                <input
                  type="number"
                  id="phone"
                  name='phone'
                  onChange={handleInputs}
                  value={user.phone}
                  placeholder="Mobile Number"
                  required
                />
              </div>
              <div className="form_field ">
                <label for="work" class="form-label">
                  <AssignmentIndIcon />
                </label>
                <input
                  type="text"
                  id="work"
                  name='work'
                  onChange={handleInputs}
                  value={user.work}
                  placeholder="You Profession"
                  required
                />
              </div>
              <div className="form_field ">
                <label for="password" class="form-label">
                  <LockOpenIcon />
                </label>
                <input
                  type="password"
                  id="password"
                  name='password'
                  onChange={handleInputs}
                  value={user.password}
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form_field ">
                <label for="cpassword" class="form-label">
                  <LockIcon />
                </label>
                <input
                  type="password"
                  id="cpassword"
                  name='cpassword'
                  onChange={handleInputs}
                  value={user.cpassword}
                  placeholder="Confirm your Password"
                  required
                />
              </div>
              <Button type='submit' variant="contained" color="primary" onClick={PostData}>
                Register
              </Button>
            </form>
          </div>

          <div className="signup_logo">
            <figure>
              <img src={signpic} alt="" />
            </figure>
            <NavLink to="/login" className="already-register">
              I am already register
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;

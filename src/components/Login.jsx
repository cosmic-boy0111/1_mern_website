import React from 'react'
import loginPic from '../images/undraw_unlock_24mb (1).svg'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <section className='signin'>
                <div className="signin_container">
                    <div className="signup_logo">
                        <figure>
                            <img src={loginPic} alt="" />
                        </figure>
                        <NavLink to='/signup' className='already-register'>Create an Account</NavLink>
                    </div>
                    <div className='signup_form_container'>
                        <h1 className='signup_header'> Sign In </h1>
                        <form className='form_container'>
                            
                            <div className='form_field' >
                                <label for="email" class="form-label"> <EmailIcon/> </label>
                                <input type="email" id='email' placeholder='Your Email' autoComplete='off'/>
                            </div>
                            
                            <div className='form_field '>
                                <label for="password" class="form-label"> <LockOpenIcon/> </label>
                                <input type="password" id='password' placeholder='Password'/>
                            </div>
                            
                            <Button variant="contained" color="primary">
                                log in
                            </Button>
                        </form>
                    </div>

                    
                </div>
            </section>

        </>
    )
}

export default Login

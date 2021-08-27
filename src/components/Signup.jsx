import React from 'react'
import signpic from '../images/undraw_press_play_bx2d.svg'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'


const Signup = () => {
    return (
        <>
            <section className='signup'>
                <div className="signup_container">
                    <div className='signup_form_container'>
                        <h1 className='signup_header'> Sign Up </h1>
                        <form className='form_container'>
                            <div className='form_field'>
                                <label for="name" class="form-label" > <PersonIcon/> </label>
                                <input type="text" id='name' placeholder='Your Name'/>
                            </div>
                            <div className='form_field' >
                                <label for="email" class="form-label"> <EmailIcon/> </label>
                                <input type="email" id='email' placeholder='Your Email' autoComplete='off'/>
                            </div>
                            <div className='form_field '>
                                <label for="phone" class="form-label"> <PhoneIphoneIcon/> </label>
                                <input type="phone" id='phone' placeholder='Mobile Number' />
                            </div>
                            <div className='form_field '>
                                <label for="work" class="form-label"> <AssignmentIndIcon/> </label>
                                <input type="text" id='work' placeholder='You Profession' />
                            </div>
                            <div className='form_field '>
                                <label for="password" class="form-label"> <LockOpenIcon/> </label>
                                <input type="password" id='password' placeholder='Password'/>
                            </div>
                            <div className='form_field '>
                                <label for="cpassword" class="form-label"> <LockIcon/> </label>
                                <input type="password" id='cpassword' placeholder='Confirm your Password'/>
                            </div>
                            <Button variant="contained" color="primary">
                                Register
                            </Button>
                        </form>
                    </div>

                    <div className="signup_logo">
                        <figure>
                            <img src={signpic} alt="" />
                        </figure>
                        <NavLink to='/login' className='already-register'>I am already register</NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup

import React,{useState,useEffect,useContext} from 'react'
import profile from '../images/another.jpeg'
import profile2 from '../images/undraw_Photo_re_5blb.svg'
import profile3 from '../images/WhatsApp Image 2021-07-31 at 08.00.12.jpeg'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

import Taps from './Taps'
import {UserContext} from '../App'

  

const About = () => {

    const {state,dispatch} = useContext(UserContext)

    const [show, setShow] = useState(true)
    const [userData, setUserData] = useState({});
    const history = useHistory();

    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method:'GET',
                headers:{
                    Accept:'application/json',
                    "Content-Type":"application/json"
                },
                credentials:'include'
            });

            const data = await res.json();
            setUserData(data);
            console.log(data);
            dispatch({type:'USER',payload:true})

            if(res.status !== 200){
                const error = new Error(res.error);
                throw error;
            }

        } catch (error) {
            console.log(error);
            history.push('/login')
        }
    }

    useEffect(() => {
        callAboutPage();
    }, [])
      
    return (
        <>
            <div className="about_container">
                <form method="GET" className="about_data">
                {/* <div className="about_data"> */}

                
                <div className="about_data1">
                        <img src={ userData.name === 'gaurav bhagat'?profile:profile2 } alt="profile" className='profile_img'/>
                    <div className='some_personal_info'>
                        <h5>{userData.name}</h5>
                        <h6>{userData.work}</h6>
                        <p>Ranking : <span>1/10</span></p>
                        <div className='tap_div'>
                            <Taps setShow={setShow}/>
                        </div>
                    </div>
                    <div className='edit_profile'>
                        <Button variant="outlined" color="secondary">
                            Edit
                        </Button>
                    </div>

                </div>

                <div className='about_data2'>
                    <div className="info1">
                        <p>Work Link</p>
                        <a href="https://www.youtube.com/channel/UCHxry3vVuBke3Py9I2x_e9w" target='_blank'>You Tube</a><br/>
                        <a href="https://www.instagram.com/cosmic_boy0111/" target='_blank'>Instagram</a><br/>
                        <a href="https://www.linkedin.com/in/gaurav-bhagat-221baa212/" target='_blank'>Linked In</a><br/>
                        <a href="https://github.com/cosmic-boy0111" target='_blank'>Git Hub</a><br/>
                        <hr />
                        <a href="#" >Web Developer</a><br/>
                        <a href="#" >Programmer</a><br/>
                        <a href="#" >Software Engineer</a><br/>
                    </div>
                    <div className="info2" style={{display:show?'flex':'none'}}>
                        <div className='under_info'>
                            <label htmlFor="">User Id</label>
                            <p>{userData._id}</p>
                        </div>
                        <div className='under_info'>
                            <label htmlFor="">Name</label>
                            <p>{userData.name}</p>
                        </div>
                        <div className='under_info'>
                            <label htmlFor="">Email</label>
                            <p>{userData.email}</p>
                        </div>
                        <div className='under_info'>
                            <label htmlFor="">Phone</label>
                            <p>{userData.phone}</p>
                        </div>
                        <div className='under_info'>
                            <label htmlFor="">Profession</label>
                            <p>{userData.work}</p>
                        </div>
                    </div>
                    <div className="info2" style={{display:show?'none':'flex'}}>
                        <div className='under_info'>
                            <label htmlFor="">Experience</label>
                            <p>Expert</p>
                        </div>
                        <div className='under_info'>
                            <label htmlFor="">Hourly Rate</label>
                            <p>10 $/hr</p>
                        </div>
                        <div className='under_info'>
                            <label htmlFor="">Total Projects</label>
                            <p>230</p>
                        </div>
                        <div className='under_info'>
                            <label htmlFor="">English Level</label>
                            <p>Expert</p>
                        </div>
                        <div className='under_info'>
                            <label htmlFor="">Availability</label>
                            <p>6 months</p>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                </form>
            </div>

        </>
    )
}

export default About

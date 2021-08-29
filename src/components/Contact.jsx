import React, { useEffect, useState, useContext } from "react";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import Button from "@material-ui/core/Button";
import {UserContext} from '../App'


const Contact = () => {
  const {state,dispatch} = useContext(UserContext)

  const [userData, setUserData] = useState({
    name:'',
    email:'',
    phone:'',
    message:'',
  });

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setUserData({...userData, name:data.name,email:data.email,phone:data.phone});
      console.log(data);
      dispatch({type:'USER',payload:true})

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userContact();
  }, []);


  const handleInputs = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData,[name]:value})

  }

  const contactForm = async(e) =>{
    e.preventDefault();
    const {name, email, phone, message} = userData;

    const res = await fetch('/contact',{
      method:'POST',
      headers:{
        "Content-Type" : 'application/json'
      },
      body: JSON.stringify({
        name,email,phone,message
      })
    })

    const data = await res.json();

    if(!data){
      console.log("message not send");
    }else{
      alert('message send')
      setUserData({...userData,message:''});
    }



  }

  return (
    <>
      <div className="contact_info">
        <div className="contact_info_items">
          <PhoneAndroidIcon className="contact_info_img" color="primary" />
          <div className="contact_info_context">
            <div className="contact_info_title">Phone</div>
            <div className="contact_info_text">{userData.phone}</div>
          </div>
        </div>
        <div className="contact_info_items">
          <EmailOutlinedIcon className="contact_info_img" color="primary" />
          <div className="contact_info_context">
            <div className="contact_info_title">Email</div>
            <div className="contact_info_text">{userData.email}</div>
          </div>
        </div>
        <div className="contact_info_items">
          <BusinessOutlinedIcon className="contact_info_img" color="primary" />
          <div className="contact_info_context">
            <div className="contact_info_title">Address</div>
            <div className="contact_info_text">pune, maharashtra</div>
          </div>
        </div>
      </div>
      {/* contact us form */}
      <div className="contact_main_container">
        <div className="contact_container">
          <h2 className="contact_header">Get in Touch</h2>
          <form className="contact_form" method='POST'>
            <div className="entry_fields">
              <div className="form_field2">
                <input
                  type="text"
                  id="name"
                  value={userData.name}
                  name="name"
                  onChange={handleInputs}
                  placeholder="Your Name"
                  required
                  className="fw-bold"
                />
                <input
                  type="email"
                  id="email"
                  value={userData.email}
                  name="email"
                  onChange={handleInputs}
                  placeholder="Your Email"
                  required
                  className="fw-bold"
                />
                <input
                  type="phone"
                  id="phone"
                  value={userData.phone}
                  name="phone"
                  onChange={handleInputs}
                  placeholder="Your Phone Number"
                  required
                  className="fw-bold"
                />
              </div>
            </div>
            <div className="text_area_div">
              <textarea
                id="message"
                rows="5"
                value={userData.message}
                name="message"
                onChange={handleInputs}
                placeholder="message"
                required
                className="fw-bold"
                style={{
                  color:'rgb(7, 204, 204)'
                }}
              ></textarea>
            </div>
            <div className="contact_submit_button">
              <Button type="submit" variant="contained" color="primary" onClick={contactForm}>
                Send message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

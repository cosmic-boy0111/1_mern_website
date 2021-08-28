import React from 'react'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import Button from '@material-ui/core/Button';

const Contact = () => {
    return (
        <>
            <div className='contact_info'>
                <div className="contact_info_items">
                    <PhoneAndroidIcon className='contact_info_img' color='primary' />
                    <div className="contact_info_context">
                        <div className="contact_info_title">
                            Phone
                        </div>
                        <div className="contact_info_text">
                            +91 8080314051
                        </div>
                    </div>
                </div>
                <div className="contact_info_items">
                    <EmailOutlinedIcon className='contact_info_img' color='primary' />
                    <div className="contact_info_context">
                        <div className="contact_info_title">
                            Email
                        </div>
                        <div className="contact_info_text">
                            gaurav@gmial.com
                        </div>
                    </div>
                </div>
                <div className="contact_info_items">
                    <BusinessOutlinedIcon className='contact_info_img' color='primary' />
                    <div className="contact_info_context">
                        <div className="contact_info_title">
                            Address
                        </div>
                        <div className="contact_info_text">
                            pune, maharashtra
                        </div>
                    </div>
                </div>
            </div>
            {/* contact us form */}
            <div className='contact_main_container'>
            <div className='contact_container'>
                <h2 className='contact_header'  >Get in Touch</h2>
                <form className='contact_form'>
                    <div className='entry_fields'>
                        <div className='form_field2'>
                            <input type="text" id='name' placeholder='Your Name' required/>
                            <input type="email" id='email' placeholder='Your Email' required/>
                            <input type="phone" id='phone' placeholder='Your Phone Number' required/>
                        </div>
                    </div>
                    <div className='text_area_div'>
                        <textarea name="" id=""  rows="5" placeholder='message'></textarea>
                    </div>
                    <div className='contact_submit_button'>
                    <Button type='submit' variant="contained" color="primary" >
                        Send message
                    </Button>

                    </div>
                </form>
            </div>
            </div>
        </>
    )
}

export default Contact

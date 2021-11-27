import React, { useState } from 'react'

import './contact.css'

import { useRef, useContext } from 'react'
import emailjs from 'emailjs-com';

import { ThemeContext } from '../../context'


import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'

const Contact = () => {

    const formRef = useRef();
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_2yfkqaj', 'template_wmg4wp8',
            formRef.current,
            'user_IKSP0t4DcmydShaXd8Skl')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }



    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={Phone}
                                alt="" className="c-icon" />
                            +92 355 075 829
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Email}
                                alt="" className="c-icon" />
                            walishahidadnan@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Address}
                                alt="" className="c-icon" />
                            Jutail, gilgit, near serena hotel
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <div className="c-desc">
                        <p><b>What's your Story?</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta facilis consequuntur quasi labore corporis cupiditate odit totam.</p>
                    </div>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" ></input>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" ></input>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" ></input>
                        <textarea style={{ backgroundColor: darkMode && "#333" }} name="massage" rows="5" placeholder="Massage" ></textarea>
                        <button>submit</button>
                        {done && "Thank you...."}
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact

import React from "react";
import {faPhone, faEnvelope, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {Contacts} from "./Contacts";
import {Form} from "./Form";

export const contacts = [
    {
        img: faPhone,
        name: 'Phone',
        value: '0123-4567-8910'
    },
    {
        img: faEnvelope,
        name: 'Email',
        value: 'hello@rainydesign.com'
    },
    {
        img: faLocationDot,
        name: 'Address',
        value: '20, Bordeshi, Amin Bazar\n' +
            'Savar, Dhaka'
    },

]

export const Contact = () => {
    return (
        <div className="contact" id='contact'>
            <div className="contact__inner">

                <div className="contact__subtitle  _anim-items _anim-no-hide _active">Contact Us</div>
                    <div className="contact__title  _anim-items _anim-no-hide _active">Stay connected with us for <br/> any reason
                </div>
                <div className="contact__block">
                    <Form/>
                    <div className="contact__content">
                        <div className="contact__content_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua.
                        </div>
                        <div className="content__info_block">
                            <Contacts contacts={contacts}/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
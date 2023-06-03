import React from "react";
import rou from '../../img/footer/logo.png'
import {Contacts} from "./Contacs";
import {contacts} from "../contact/Contact";
import {LinksAbout} from "./LinksAbout";
import {Service} from "./Service";
import {Socials} from "./Socials";
import {faFacebookF, faTwitter, faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    const linksAbout = [
        {name:'About us'},
        {name:'Service'},
        {name:'Our Story'},
        {name:'Success'},
        {name:'Support'}
    ]

    const services = [
        {name:'Development'},
        {name:'Maintanance'},
        {name:'Consultancy'},
        {name:'Design'},
    ]

    const socials = [
        {img: faFacebookF, name: 'facebook'},
        {img: faTwitter, name: 'twitter'},
        {img: faYoutube, name: 'youtube'},
        {img: faInstagram, name: 'instagram'},
    ]

    return (
        <footer className="footer">

            <div className="footer_upper">

                <div className="footer__content">
                    <img className="footer__content_photo" src={rou} alt=""/>
                        <div className="footer__content_text">Fectetur adipisicing elit, sed do eius mod tempor Lorem
                            ipsum dolor sit amet, con sectetur adipisicing elitt ut labore
                        </div>
                        <input className="footer__content_input" type="email" name="" id="" placeholder="Submit email"/>
                </div>

                <div className="footer__column_block">

                    <div className="footer__column">
                        <div className="footer__column_title">About</div>
                        <LinksAbout links={linksAbout}/>
                    </div>

                    <div className="footer__column">
                        <div className="footer__column_title">Service</div>
                        <Service services={services}/>
                    </div>

                    <div className="footer__column">
                        <div className="footer__column_title">Get in Touch</div>
                        <Contacts contacts={contacts} />
                    </div>


                </div>


            </div>

            <div className="copyright">

                <div className="copyright__left">

                    <div className="copyright__left_text">Follow Us</div>
                    <Socials socials={socials}/>

                </div>

                <div className="copyright__right">All rights reserved &copy;<span> Salii Vladislav </span> 2020</div>
            </div>

        </footer>
    )
}
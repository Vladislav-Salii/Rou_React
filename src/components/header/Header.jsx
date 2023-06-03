import React, {useEffect, useState} from "react";
import {Link} from "react-scroll";
import logo from '../../img/intro/logo.png'

export const Header = () => {
        const [openBurger, setOpenBurger] = useState(false)

        const headerFixed = () => {
        const header = document.querySelector('.header');
        const intro = document.querySelector('.intro');

        let scrollTop = window.scrollY;
        let introCenter = intro?.offsetHeight / 2;

        if (scrollTop > introCenter) {
            header.classList.add('fixed');
            intro.style.paddingTop = `${header?.offsetHeight}px`;
        } else {
            header.classList.remove('fixed');
            intro.style.paddingTop = `0px`;
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {

            headerFixed();
        });

        return () => {
            window.removeEventListener('scroll', headerFixed);
        };
    }, );

    return <div className="header">
        <div className="header__inner">
            <div className="header__logo">
                <img src={logo} alt=""/>
            </div>
            <div className={`header__nav lock-padding ${openBurger ? '_active_burger' : ''}`}>
                <Link to="intro" className="header__nav_link ">Home</Link>
                <Link to='about' className="header__nav_link" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>About us</Link>
                <Link to="service"  className="header__nav_link" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Service</Link>
                <Link to="work"  className="header__nav_link" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Works</Link>
                <Link to="team"  className="header__nav_link" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Team</Link>
                <Link to="contact" className="header__nav_link" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                <a className="header__nav_link _active">Get A Quote</a>
            </div>
            <div className={`nav__burger ${openBurger ? '_active_burger' : ''}`} onClick={() => !openBurger ? setOpenBurger(true) : setOpenBurger(false)}/>
        </div>

    </div>
}
import React from "react";
import {Link} from "react-scroll";

export const LinksAbout = ({links}) => links.map(link =>
    <Link key={link.name} to='about' className="footer__column_item" activeClass="active" spy={true} smooth={true} offset={50} duration={200}>{link.name}</Link>
)
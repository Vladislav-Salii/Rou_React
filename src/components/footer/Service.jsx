import React from "react";
import {Link} from "react-scroll";

export const Service = ({services}) => services.map(service =>
    <a href="" className="footer__column_item" key={service.name}>{service.name}</a>
)
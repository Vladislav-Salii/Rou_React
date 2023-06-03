import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Socials = ({socials}) => socials.map(social =>
    <div className="copyright__left_social" key={social.name}>
            <FontAwesomeIcon icon={social.img}/>
    </div>
)
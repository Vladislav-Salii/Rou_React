import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Contacts = ({contacts}) => contacts.map(contact =>
    <a href="" className="footer__column_item" key={contact.name}>
        <i className="fa fa-map-marker" aria-hidden="true">
            <FontAwesomeIcon icon={contact.img}/>
        </i>
        <div className="footer__column_item_text">{contact.value}</div>
    </a>
)
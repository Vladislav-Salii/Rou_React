import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Contacts = ({contacts}) => contacts.map(contact =>
    <a href={`tel: ${contact.value}`} className="contact__content_item" key={contact.name}>
        <div className="contact__content_item_icon">
            <i className="fa fa-phone" aria-hidden="true">
                <FontAwesomeIcon icon={contact.img}/>
            </i>
        </div>
        <div className="contact__content_item_content">
            <div className="contact__content_item_content_title">{contact.name}</div>
            <div className="contact__content_item_content_text">{contact.value}</div>
        </div>
    </a>
)
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

export const MoreInfoProject = ({modalProject, openModal}) => {
    console.log(modalProject)
    return (
        <div className="popups__block">
            <div id="blog_item_first_popup" className="popup open">
                <div className="popup__body">
                    <div className="popup__content">
                        <img src={modalProject?.img} alt=""/>
                            <div className="work__item_content ">
                                <div className="work__item_content_subtitle">{modalProject?.subtitle}</div>
                                <div className="work__item_content_title">
                                    {modalProject?.title}
                                </div>
                                <div className="work__item_content_text">
                                    {modalProject?.description}
                                </div>
                            </div>
                            <a className="popup__close close-popup" onClick={() => openModal(modalProject)}>
                                <FontAwesomeIcon icon={faXmark}/>
                            </a>
                    </div>
                </div>


            </div>
        </div>
    )
}
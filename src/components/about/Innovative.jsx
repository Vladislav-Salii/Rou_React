import React from "react";
import aboutPhoto from '../../img/about/photo.jpg'
export const Innovative = () => (
    <div className="about__innovative">
        <div className="about__innovative_content">
            <div className="about__innovative_content_title _anim-items _anim-no-hide _active">Most innovative creative team</div>
            <div className="about__innovative_content_text _anim-items _anim-no-hide _active">Pore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exerction <br/>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excep teur sint occae cat cupidatat non proident, sunt in culpa qui officia deser unt
                    mollit anim id est laborum.
            </div>
            <button className="about__innovative_content_btn _anim-items _anim-no-hide _active">Know More</button>
        </div>

        <div className="about__innovative_photo">
            <img src={aboutPhoto} alt=""/>
        </div>
    </div>
)
import React from "react";
import img1 from '../../img/about/icon_1.png';
import img2 from '../../img/about/icon_2.png'
import img3 from '../../img/about/icon_3.png'
import {Cards} from "./Cards";


export const Business = () => {
    const dataCards = [
        {
            img: img1,
            title: 'Comlete business Control',
            describe: 'Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exerci tation',
        },
        {
            img: img2,
            title: 'Critical analytics and report',
            describe: 'Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exerci tation',
        },
        {
            img: img3,
            title: 'User satisfaction guarranted',
            describe: 'Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exerci tation',
        }
    ]

    return <div className="about__business">
        <div className="about__business_subtitle  _anim-items _anim-no-hide _active">Build trust first</div>
        <div className="about__business_title  _anim-items _anim-no-hide _active">Control your business with
            a <br/> single tap
        </div>
        <div className="about__block">
            <Cards dataCards={dataCards}/>
        </div>
    </div>
}
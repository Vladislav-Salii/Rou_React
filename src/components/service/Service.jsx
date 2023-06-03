import React from "react";
import icon1 from '../../img/service/icon_1.png'
import icon2 from '../../img/service/icon_2.png'
import icon3 from '../../img/service/icon_3.png'
import icon4 from '../../img/service/icon_4.png'
import icon5 from '../../img/service/icon_5.png'
import icon6 from '../../img/service/icon_6.png'
import {Cards} from "./Cards";
export const Service = () => {
    const data = [
        {
            line: [
                {
                    img: icon1,
                    title: 'Business Automation',
                    description:'Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exerci tation'
                },
                {
                    img: icon2,
                    title: 'Realtime Support',
                    description:'Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exerci tation'
                }
            ]
        },
        {
            line: [
                {
                    img: icon3,
                    title: 'Ecommerce Support',
                    description:'Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exerci tation'
                },
                {
                    img: icon4,
                    title: 'Location Marking',
                    description:'Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exerci tation'
                }
            ]
        },
        {
            line: [
                {
                    img: icon5,
                    title: 'Video Production',
                    description:'Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exerci tation'
                },
                {
                    img: icon6,
                    title: 'File Upload Protocol',
                    description:'Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nos trud exerci tation'
                }
            ]
        }
    ]
    return (
        <div className="service" id='service'>

            <div className="container">
                <div className="service__inner">

                    <div className="service__subtitle _anim-items _anim-no-hide _active">What we do</div>
                    <div className="service__title _anim-items _anim-no-hide _active">Service to solve all kinds
                        of <br/> business problem</div>

                </div>
            </div>

            <div className="service__block">
                <Cards data={data}/>
            </div>

        </div>
    )
}
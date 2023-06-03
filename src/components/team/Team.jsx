import React from "react";
import team1 from '../../img/team/1.png';
import team2 from '../../img/team/2.png'
import team3 from '../../img/team/3.png'
import team4 from '../../img/team/4.png'
import {Persons} from "./Persons";

export const Team = () => {
    const dataTeam = [
        {
            img: team1,
            name: 'Bruce Wayne',
            position: 'Founder & CEO'
        },
        {
            img: team2,
            name: 'Clark Kent',
            position: 'Manager'
        },
        {
            img: team3,
            name: 'Jessica Parker',
            position: 'Developer'
        },
        {
            img: team4,
            name: 'Justin Pakerman',
            position: 'Designer'
        },
    ]

    return <div className="team" id='team'>
        <div className="team__inner">

            <div className="team__subtitle _anim-items _anim-no-hide _active">Meet our team</div>
            <div className="team__title _anim-items _anim-no-hide _active">Awesome people with great <br/> business skills</div>

            <div className="team__block">
                <Persons persons={dataTeam}/>
            </div>

        </div>
    </div>
}
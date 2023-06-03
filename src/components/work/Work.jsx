import React from "react";
import work1 from '../../img/work/photo_1.png'
import work2 from '../../img/work/photo_2.png'
import work3 from '../../img/work/photo_3.png'
import {Projects} from "./Projects";

export const Work = () => {
    const dataProjects = [
        {
            img: work1,
            title: 'Jodi kokhono vul hoye jay tumi oporadh nio na',
            subtitle: 'Development',
            description: 'Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia deser unt mollit a do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            moreInfo:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde quos odit deserunt. Fugit recusandae pariatur temporibus ea, dolor architecto unde deserunt et quasi, excepturi incidunt rerum, perspiciatis nihil error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde quos odit deserunt. Fugit recusandae pariatur temporibus ea, dolor architecto unde deserunt et quasi, excepturi incidunt rerum, perspiciatis nihil error?'
        },
        {
            img: work2,
            title: 'Ei biristi veja rate tuminei bole somoy amar katena',
            subtitle: 'Research & Analytics',
            description: 'Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia deser unt mollit a do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            moreInfo:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde quos odit deserunt. Fugit recusandae pariatur temporibus ea, dolor architecto unde deserunt et quasi, excepturi incidunt rerum, perspiciatis nihil error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde quos odit deserunt. Fugit recusandae pariatur temporibus ea, dolor architecto unde deserunt et quasi, excepturi incidunt rerum, perspiciatis nihil error?'
        },
        {
            img: work3,
            title: 'Ami jare chaire se thake mori ontore',
            subtitle: 'UI/UX Engineering',
            description: 'Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia deser unt mollit a do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            moreInfo:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde quos odit deserunt. Fugit recusandae pariatur temporibus ea, dolor architecto unde deserunt et quasi, excepturi incidunt rerum, perspiciatis nihil error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde quos odit deserunt. Fugit recusandae pariatur temporibus ea, dolor architecto unde deserunt et quasi, excepturi incidunt rerum, perspiciatis nihil error?'
        }
    ]

    return (
        <div className="work" id='work'>
            <div className="work__inner">

                <div className="work__subtitle _anim-items _anim-no-hide _active">Our Projects</div>
                <div className="work__title _anim-items _anim-no-hide _active">Check the real innovation of <br/> problem solving
                </div>

                <div className="work__block">
                    <Projects dataProjects={dataProjects}/>
                </div>

                <a href="#" className="work__link">Go to Portfolio</a>

            </div>
        </div>
    )
}
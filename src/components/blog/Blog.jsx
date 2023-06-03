import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Cards} from "./Cards";
import blog1 from '../../img/blog/1.png'
import blog2 from '../../img/blog/2.png'
import blog3 from '../../img/blog/3.png'



export const Blog = () => {
    const dataCards = [
        {
            title: 'When the musics over turn off the light',
            subtitle: 'Development',
            description: 'Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia deser unt mollit a do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            name: 'Sharmin Eity',
            colorClassname: '',
            img: blog1,
            likes: 22
        },
        {
            title: 'When the musics over turn off the light',
            subtitle: 'Research & Analytics',
            description: 'Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia deser unt mollit a do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            name: 'Sanjida Ema',
            colorClassname: 'green',
            img: blog2,
            likes: 34
        },
        {
            title: 'When the musics over turn off the light',
            subtitle: 'Design',
            description: 'Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia deser unt mollit a do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            name: 'Nayna Eva',
            colorClassname: 'orange',
            img: blog3,
            likes: 98
        }
    ]
    return (
        <div className="blog">
            <div className="blog__inner">

                <div className="blog__upper_block">

                    <div className="blog__title__block">
                        <div className="blog__subtitle _anim-items _anim-no-hide _active">From our blog</div>
                        <div className="blog__title _anim-items _anim-no-hide _active">Get lastest update</div>
                    </div>

                    <div className="blog__link">Go to Blog</div>

                </div>

                <div className="blog__under_block">
                    <Cards dataCards={dataCards}/>
                </div>

            </div>
        </div>
    )
}
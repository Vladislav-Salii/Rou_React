import React from "react";
import introPhoto from '../../img/intro/photo.png'
import {Header} from "../header/Header";
export const Intro = () => {
    return (
        <div className="intro" id='intro'>
            <div className="intro__inner">
                <Header />
                <div className="intro__block">
                    <div className="intro__content">
                        <div className="intro__title  _anim-items _anim-no-hide _active">Work Smartly with Endless Possibility</div>
                        <div className="intro__text  _anim-items _anim-no-hide _active">
                            Pore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerction
                        </div>
                        <button className="intro__btn _anim-items _anim-no-hide _active">Get Started</button>
                    </div>
                    <div className="intro__photo">
                        <img src={introPhoto} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
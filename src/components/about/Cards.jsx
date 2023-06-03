import React from "react";

export const Cards = ({dataCards}) =>
        dataCards.map(item =>
            <div className="about__block_item" key={item.title}>
                <div className="about__block_item_icon">
                    <img src={item.img} alt=""/>
                </div>
                <div className="about__block_item_title">{item.title}</div>
                <div className="about__block_item_text">{item.describe}</div>
            </div>
        )
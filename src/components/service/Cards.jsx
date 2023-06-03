import React from "react";
import arrow from "../../img/service/arrow.png";

export const Cards = ({data}) => (
    data.map(item =>
        <div className="service__block_line" key={item.line[0].title}>
            {item.line.map(card =>
                <div className="service__block_item" key={card.title}>
                    <div className="service__block_item_icon">
                        <img src={card.img} alt=""/>
                    </div>
                    <div className="service__block_item_title">{card.title}</div>
                    <div className="service__block_item_text">
                        {card.description}
                    </div>
                    <div className="service__block_item_nav">
                        <img src={arrow} alt=""/>
                    </div>
                </div>
            )}
        </div>
    )
)
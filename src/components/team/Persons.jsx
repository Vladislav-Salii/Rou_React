import React from "react";

export const Persons = ({persons}) => persons.map(person =>
    <div className="team__item" key={person.name}>
        <div className="team__item_photo">
            <img src={person.img} alt=""/>
        </div>
        <div className="team__item_name">{person.name}</div>
        <div className="team__item_prof">{person.position}</div>
    </div>
)
import React from "react";
import "../Experience/Card_experience.css"

function Experience_card(props) {
    return (
        <div className={props.name_image} >
            <img className={props.name_image} src={props.image} alt={props.description_image} />
            <p>{props.category}</p>
        </div>
    );
}

export default Experience_card;
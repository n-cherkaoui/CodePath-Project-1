import React from "react";
// import Event from './Event'

const Card = (props) => {
    return (
        <div className="Card">
            <h1>{props.topic}</h1>
            <img src={props.imageLink} alt="card"></img>
        </div>
    )
}

export default Card;
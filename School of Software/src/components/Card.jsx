import React from "react";
// import Event from './Event'

const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.imageLink} alt="card"></img>
            <div className="content">
                <h2>{props.topic}</h2>
                <button><a href={props.link}>View Resource</a></button>
            </div>
        </div>
    )
}

export default Card;
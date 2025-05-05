import React from "react";

function RepertoireCard() {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>Composed by: {props.composer}</p>
            <p>Grade: {props.grade}</p>
        </div>
    );
}

export default RepertoireCard;
import React from 'react';

function Score(props){
    return (
        <p>Your Score : {props.correct}/{props.questions}</p>
    );
}


export default Score;
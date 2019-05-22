import React from 'react';
import PropTypes from 'prop-types';


function MessageBox(props){

    const {currentUser,messages} = props;
    //console.log(currentUser);
    return (
        <ul className="message-list">
            {messages.length > 0  && messages.map((msgObj,index) =>(
                <li key = {index} className = 
                {Object.keys(msgObj)[0]===currentUser?
                'message sender':'message recipient'}>
                    <p>{Object.keys(msgObj)[0]}: {Object.values(msgObj)[0]}</p>
                </li>
            ))}
        </ul>
    );
}


MessageBox.propTypes = {
    currentUser: PropTypes.string.isRequired,
    messages: PropTypes.array.isRequired
};

export default MessageBox;
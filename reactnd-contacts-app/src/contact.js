import React from 'react';
import PropTypes from 'prop-types';


function Contact(props){

    const {onRemoveHandler,contact} = props;
    const {avatarURL,name,handle} = contact;

    return(
        <li  className="contact-list-item">
                
            <div className="contact-avatar"
             style = {{backgroundImage:`url(${avatarURL})`}} />
                
            <div className="contact-details">
                <p>{name}</p>
                <p>{handle}</p>
            </div>

            <button className="contact-remove" 
             onClick = {() => onRemoveHandler(contact)}>
                Delete
            </button>

        </li>
    );
}


Contact.propTypes = {
    contact:PropTypes.shape({
        name:PropTypes.string.isRequired,
        avatarURL:PropTypes.string.isRequired,
        id:PropTypes.string.isRequired,
        handle:PropTypes.string.isRequired
    }),
    onRemoveHandler:PropTypes.func.isRequired
};


export default Contact;
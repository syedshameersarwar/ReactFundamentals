import React from 'react';
import PropTypes from 'prop-types';


function User(props){

    const {details} = props;

    return (
        
        <tr>
            <td>{details.userName}</td>
            <td>{details.firstName}</td>
            <td>{details.lastName}</td>
            <td>{details.userName} played {props.hide?'*':details.games} games</td>
        </tr>
    );
}


User.propTypes = {
    details:PropTypes.object.isRequired
};

export default User;
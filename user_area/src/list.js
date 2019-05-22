import React,{Component} from 'react';
import User from './user.js';
import PropTypes from 'prop-types';


class UserList extends Component{


    static propTypes = {
        users:PropTypes.array.isRequired
    };
    
    constructor(props){
        super(props);
        this.state = {
            hide:false
        }
    }


    changeHandler = () => {
        this.setState((prevStat)=>({
            hide: !prevStat.hide
        }));
    }


    render(){
        const {users} = this.props;
        const {hide} = this.state;

        return (
            <div>
                <b>Users</b>
                <br />
                <br />
                {users.length>0 && (
                <table>

                    <thead>
                        <tr>
                            <td>Username</td>
                            <td>Firstname</td>
                            <td>Lastname</td>
                            <td>Games</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user)=>
                            <User key = {user.userName} details = {user} hide = {hide} />
                        )}
                    </tbody>

                </table>
                )}

                <button onClick = {this.changeHandler}>
                    {hide?'Show the Number of Games Played':
                    'Hide the Number of Games Played'}
                </button>
            </div>
        );

        
    }
}


export default UserList;
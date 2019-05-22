import React,{Component} from 'react';
import UserForm from './form';
import UserList from './list';


class UserArea extends Component{


    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }


    addUser = (userObj) => {
        const newUser = userObj;
        this.setState((prevStat) => ({
            users:[...prevStat.users,newUser]
        }))
    }
    
    
    render(){
        return (
            <div className="container">
                <UserForm users = {this.state.users} 
                    addUserHandler = {this.addUser} />
                <UserList users = {this.state.users} />
            </div>
        );
    }
}

export default UserArea;
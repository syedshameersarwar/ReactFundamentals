import React,{Component} from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component{


    static propTypes = {
        users:PropTypes.array.isRequired,
        addUserHandler:PropTypes.func.isRequired
    };


    constructor(props){
        super(props);
        this.state  = {
            firstName:'',
            lastName:'',
            userName:'',
            games:0
        }
    }


    isUserExist = (username) => {
        const {users} = this.props;
        return users.filter(user => user.userName===username).length !== 0
    };


    addUserRequest = (e) => {

        e.preventDefault();

        if (this.isUserExist(this.state.userName))
            alert("User Already exists.");
        else
            this.props.addUserHandler(this.state);
    }


    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]:value
        });
    }


    isInputsEmpty = () => {
        const {firstName,lastName,userName} = this.state;
        return (firstName === '' || lastName === '' || userName === '');
    }


    render(){
        return(
            <div>
                <b>Add User</b>
                <br />
                <br />
                <form onSubmit = {this.addUserRequest}>
                    <input  type = 'text' name = 'firstName' 
                    value = {this.state.firstName} onChange = {this.handleChange}
                    placeholder = 'First Name' className="form-element"/>
                    <br />

                    <input  type = 'text' name = 'lastName' 
                    value = {this.state.lastName} onChange = {this.handleChange}
                     placeholder = 'Last Name'  className="form-element"/>
                    <br />

                    <input  type = 'text' name = 'userName' 
                    value = {this.state.userName} onChange = {this.handleChange}
                    placeholder = 'UserName' className="form-element"/>
                    <br />

                    <button disabled = {this.isInputsEmpty()}>Add User</button>
            </form>
            </div>
        );
    }
}


export default UserForm;
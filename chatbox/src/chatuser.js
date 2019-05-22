import React,{Component} from 'react';
import MessageBox from './messagebox';
import PropTypes from 'prop-types';


class ChatUser extends Component{

    
    static propTypes = {
        messageHandler: PropTypes.func.isRequired,
        messages: PropTypes.array.isRequired,
        username: PropTypes.string.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            msgString:''
        };
    }


    addMessageHandler = (e) => {
        e.preventDefault();

        const {username} = this.props;
        const {msgString} =  this.state;

        this.props.messageHandler({[username]:msgString});
    }


    handleChange = (e) => {
        this.setState({
            msgString:e.target.value
        });
    }


    isInputEmpty = () => this.state.msgString === '';

    render(){
        const {username,messages} = this.props;

        return(
            <div>

                <h2>Super Awesome Chat</h2>
                <br />

                <div className="name sender">{username}</div>
                <br />

                <MessageBox currentUser = {username} messages = {messages} />
                <br />
                
                <div>
                    <form className="input-group" onSubmit = {this.addMessageHandler}>
                    
                        <input value={this.state.msgString} placeholder = 'Enter Message'
                            type = 'text' onChange = {this.handleChange}
                            className="form-control" />
                        <br/><br />

                        <div className="input-group-append">
                            <button className="btn submit-button" 
                            disabled = {this.isInputEmpty()}>Send
                            </button>
                            
                        </div>
                    </form>
                </div>

            </div>
        );
    }
    
}


export default ChatUser;
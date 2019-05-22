import React,{Component} from 'react';
import ChatUser from './chatuser';


class ChatFrame extends Component{
  
    
    constructor(props){
        super(props);
        this.state = {
            messages : [],
            users:['Amy','John']
        };
    }


    addMessage = (msgObj) => {

        this.setState((prevStat) =>({
            messages:[...prevStat.messages,msgObj]
        }));
    }


    render(){
        const {messages,users} = this.state;
        return(
            <div className="container">
                <div className="chat-window">
                    <ChatUser messageHandler = {this.addMessage} 
                    messages = {messages} username = {users[0]} />
                </div>
                <div className="chat-window">
                    <ChatUser messageHandler = {this.addMessage} 
                    messages = {messages} username = {users[1]} />
                </div>
            </div>
        );
    }
}


export default ChatFrame;
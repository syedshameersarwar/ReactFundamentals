import React,{Component} from 'react';


class Mirror extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: '',
            mirror:''
        };
    }

    
    handleChange = (e) => {
        const val = e.target.value;
        this.setState((state)=>({
            value:val,
            mirror:val
        }));
    }

    
    render(){
        return(
            <div>
                
                <input type= "text" placeholder = "Say Something" value={this.state.value} 
                onChange = {this.handleChange} ></input>
                <br></br>
                <p>Echo:</p>
                <br></br>
                {this.state.value!==''?(<p>{this.state.mirror}</p>):(<p>
                    This should mirror the text you typed into the input field
                </p>)}
            </div>
        );
    }
}


export default Mirror;
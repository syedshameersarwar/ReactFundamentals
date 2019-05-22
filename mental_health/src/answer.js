import React,{Component} from 'react';


class Answer extends Component{
    

    clickTrue = () => this.props.trueHandler();

    clickFalse = () => this.props.falseHandler();

    render(){
        
        return(
            <div>
                <button onClick = {this.clickTrue}>True</button>
                <button onClick = {this.clickFalse}>False</button>
            </div>
        );
    }
}


export default Answer;
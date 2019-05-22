import React,{Component} from 'react';
import Question from './question';
//import Answer from './answer';
import Score from './score';


class Game extends Component{

    constructor(props){
        
        super(props); 
        this.state = {
            numQues:0,
            numCorrect:0
        };
    }


    incr = () => {
        this.setState((state)=>({
            numQues:state.numQues+1
        }));
    }


    correctHandler = () => {        
        this.setState((state)=>({
                numCorrect:state.numCorrect+1
        }));      
    };


    render(){

        return(
            <div>
                <h1>Mental Health Game</h1> 
                <Question correctHandler= {this.correctHandler} incrHandler = {this.incr}/>
                <Score correct={this.state.numCorrect} questions={this.state.numQues} />
            </div>
        );
    }
}



export default Game;
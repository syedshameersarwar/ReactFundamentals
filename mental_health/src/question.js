import React,{Component} from 'react';
import Answer from './answer';


class Question extends Component{
    
    constructor(props){
        super(props);

        const X = Math.floor(Math.random() * 100);
        const Y = Math.floor(Math.random() * 100);
        const Z = Math.floor(Math.random() * 100);
        const prop_ans = Math.floor(Math.random() * 3) + X + Y + Z;

        this.state = {
            X:X,
            Y:Y,
            Z:Z,
            proposedAnswer:prop_ans
        }

    }


    checkTrue = () => {
        const {X,Y,Z,proposedAnswer} = this.state;
        
        this.props.incrHandler();

        if (X+Y+Z === proposedAnswer)
            this.props.correctHandler();
        
        this.update();
        
    }


    checkFalse = () => {
        const {X,Y,Z,proposedAnswer} = this.state;
        
        this.props.incrHandler();

        if (X+Y+Z !== proposedAnswer)
            this.props.correctHandler();
        
        this.update();
        
    }


    update = () => {   
        const X = Math.floor(Math.random() * 100);
        const Y = Math.floor(Math.random() * 100);
        const Z = Math.floor(Math.random() * 100);
        
        this.setState((state)=>({
            X: X,
            Y: Y,
            Z: Z,
            proposedAnswer: Math.floor(Math.random() * 3) + X + Y + Z
        }));
    }

    

    render(){
        const {X,Y,Z,proposedAnswer} = this.state;
        return (
            <div>
                <p>{X} + {Y} + {Z} = {proposedAnswer}</p>
                <Answer trueHandler={this.checkTrue} falseHandler={this.checkFalse}  />
            </div>
        );
    }
}

export default Question;
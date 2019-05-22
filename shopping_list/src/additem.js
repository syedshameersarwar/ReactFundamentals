import React,{Component} from 'react';

class Add extends Component{

    constructor(props){
        super(props);
        this.state = {
            value:''
        }
    }


    updateValue = (e) => {
        const val = e.target.value;
        this.setState((prevStat)=>({
            value:val
        }));
    }


    addItemHandler = (e) => {
        e.preventDefault();
        this.props.addHandler(this.state.value);
    }


    isInputEmpty = () => (this.state.value === '');


    render(){
        return (
            <form onSubmit = {this.addItemHandler}>
                <input type = 'text' value = {this.state.value}
                placeholder = 'Enter Item to Add' onChange = {this.updateValue} ></input>
                <button disabled = {this.isInputEmpty()}>Add</button>
            </form>
        );
    }
    
}

export default Add;
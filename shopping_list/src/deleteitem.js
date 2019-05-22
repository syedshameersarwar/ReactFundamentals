import React,{Component} from 'react';

class Delete extends Component{

    isItemsEmpty = () => (this.props.listLength===0);

    deleteHandler = () => this.props.ondeleteHandler();

    render(){
        return (
            <button disabled = {this.isItemsEmpty()} onClick = {this.deleteHandler}>
                Delete Last Item
            </button>
        );
    }
}


export default Delete;
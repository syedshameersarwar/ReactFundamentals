import React,{Component} from 'react';
import Add from './additem';
import Delete from './deleteitem';
import List from './listitems';


class ShoppingList extends Component{

    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }



    deleteItem = () => {
        this.setState((prevStat)=>({
            items:prevStat.items.slice(0,-1)
        }));
    }
    
    
    addItem = (item) => {
        this.setState((prevStat)=>({
            items: [...prevStat.items,item]
        }));
    }


    render(){
        return (
            <div>
                <h2>Shopping List</h2>
                <Add addHandler = {this.addItem} />
                <Delete listLength = {this.state.items.length} 
                        ondeleteHandler = {this.deleteItem} />
                <List list = {this.state.items} />
             </div>
        );
    }

}


export default ShoppingList;
import React, {Component} from 'react';
import PropTypes from 'prop-types';


class SearchBar extends Component{


    static propTypes = {
        onQueryChange:PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            value:''
        };
    }

    
    handleChange = (e) => {
        const newValue = e.target.value;
        this.setState({value:newValue});
        this.props.onQueryChange(newValue);
    }



    render(){
        return (
            <input type='text' value = {this.state.value} 
             onChange = {this.handleChange} placeholder =
            'Search Contact' className="search-contacts"/>
        );
    }
}


export default SearchBar;
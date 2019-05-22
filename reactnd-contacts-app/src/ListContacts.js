import React,{Component} from 'react';
import SearchBar from './search';
import Contact from './contact';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


class ListContacts extends Component{

    static propTypes = {
        contacts:PropTypes.arrayOf(PropTypes.shape({
            name:PropTypes.string.isRequired,
            avatarURL:PropTypes.string.isRequired,
            id:PropTypes.string.isRequired,
            handle:PropTypes.string.isRequired
        })
        ),
        removeContactHandler:PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            query:''
        };
    }


    updateQuery = (newQuery) => {
        this.setState({query:newQuery});
    }
   

    resetQuery = () => {
        this.setState({query:''});
    }


    render(){
        
        const {contacts,removeContactHandler} = this.props;
        const {query} = this.state;

        const showingContacts = (query==='')?contacts:
                            contacts.filter(contact=>
                            contact.name.toLowerCase().includes(query.toLowerCase()));

        return(
            <div className="list-contacts">
                
                <div className="list-contacts-top">
                    <SearchBar onQueryChange = {this.updateQuery} />
                    <Link to = 'create' className="add-contact" >Add Contact</Link>
                </div>

                {showingContacts.length !== contacts.length && (
                    <div className="showing-contacts">
                        <span>
                            Showing {showingContacts.length} of {contacts.length}.
                        </span>

                        <button onClick = {this.resetQuery}>
                            Show All
                        </button>
                    </div>
                )}

                <ol className="contact-list">
                    {showingContacts.map(contact=>
                        <Contact key = {contact.id} contact = {contact} 
                        onRemoveHandler = {(contact) => removeContactHandler(contact)}
                        />
                    )
                    }
                </ol>
            </div>
        );
    }
}


export default ListContacts;
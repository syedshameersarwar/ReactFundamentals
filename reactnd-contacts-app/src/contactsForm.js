import React,{Component} from 'react';
import serializeForm from 'form-serialize';
import {Link} from 'react-router-dom';
import ImageInput from './ImageInput';
import PropTypes from 'prop-types'

class ContactForm extends Component{

    static propTypes = {
        addContactHandler:PropTypes.func.isRequired
    };


    handleSubmit = (e) => {
        e.preventDefault();
        const contactObj = serializeForm(e.target,{hash:true});
        this.props.addContactHandler(contactObj); 
    }

    render(){
        return(
            <div>
                <Link className="close-create-contact" to = '/'>Back</Link>
                
                <form onSubmit = {this.handleSubmit} className="create-contact-form">
                    
                    <ImageInput name="avatarURL" maxHeight={64}
                     className="create-contact-avatar-input" />

                    <div className="create-contact-details">
                        <input type = "text" name = "name" placeholder = 'Name' />
                        <input type = "text" name = "handle" placeholder = 'Handle' />
                        <button>Add Contact </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;
import { Component } from 'react';
import PropTypes from 'prop-types'
import shortid from 'shortid';
import './ContactForm.css'

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }
    
    nameId = shortid();
    numberId = shortid();
    
    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleChangeNumber = (e) => {
        this.setState({
            number: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { banOnAddingDuplicateContact } = this.props
        const { name, number } = this.state
        const { resetForm } = this
        
        const contact = {
            id: shortid(),
            name,
            number
        }
        
        banOnAddingDuplicateContact(contact)
        resetForm()
    }

    resetForm = () => {
        this.setState({ name: '', number: '' })
    }
        
    render() {

        const { handleSubmit, handleChangeName, handleChangeNumber, nameId, numberId } = this
        const { name, number } = this.state
        return (
            <form className="contact-form" onSubmit={handleSubmit}>
                <label className="label" htmlFor={nameId}>Enter name</label>
                <input
                    id={nameId}
                    type="text"
                    className="input"
                    name="name"
                    value={name}
                    onChange={handleChangeName}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
                <label className="label" htmlFor={numberId}>Enter number</label>
                <input
                    id={numberId}
                    type="tel"
                    className="input"
                    name="number"
                    value={number}
                    onChange={handleChangeNumber}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />
                <button type="submit" className="contact-button">Add contact</button>
            </form>
        )
    }
}

ContactForm.propTypes = {
    banOnAddingDuplicateContact: PropTypes.func
}

export default ContactForm
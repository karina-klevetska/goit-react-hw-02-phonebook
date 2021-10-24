import './ContactList.css'

const ContactList = ({ children }) => {
    return (
        <ul className="contact-list">
            {children}
        </ul>
    )
}

export default ContactList
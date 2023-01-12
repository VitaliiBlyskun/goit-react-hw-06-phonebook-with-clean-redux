import { DeleteContactButton } from "components/DeleteContact/DeleteContact";
import { useSelector } from "react-redux";
import { getContacts } from 'redux/selectors';
import { Initial, List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  // console.log(contacts);




  return (

    <List>
        {contacts.map(contact => <Initial key={contact.id}>
          <p>{contact.name + ":" + contact.number}</p>
          <DeleteContactButton contact={contact}/>
        </Initial>)}
    </List>

  );
};

export default ContactList


// ContactList.propTypes = {
//   list: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };


//////////////////////////////////////////////////////////////////////////////////





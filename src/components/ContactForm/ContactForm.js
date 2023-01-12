import { addContact } from 'redux/actions';
import { useDispatch } from 'react-redux';
import { Button, Form, Label, Input } from './ContactForm.styled';


const ContactForm = () => {

const dispatch = useDispatch();

 
const handleSubmit = event => {
  event.preventDefault();
    const form = event.target;
    dispatch(addContact(form.elements.name.value));
    dispatch(addContact(form.elements.number.value));

    // dispatch(addContact(form.elements.name.value));
    // dispatch(addContact(form.elements.number.value));
    // console.log(dispatch(addContact(form.elements.name.value)));
    // console.log(dispatch(addContact(form.elements.number.value)));
    
    console.log(form.elements.name.value)
    console.log(form.elements.number.value)

    form.reset()
};
  
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button >
        Add contact
      </Button>
    </Form>
  );
}

export default ContactForm;

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
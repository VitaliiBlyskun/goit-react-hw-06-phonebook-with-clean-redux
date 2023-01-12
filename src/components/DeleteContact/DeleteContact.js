import { useDispatch } from "react-redux";
import { deleteContact } from "redux/actions";
import { Button } from "./DeleteContact.styled";

export const DeleteContactButton = ({ contact }) => {

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id))
//   console.log(contact.id)


  return (

     <Button type="button" onClick={handleDelete}>
        Delete
     </Button>

  );
};



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



////////////////////////////////////////////////////////////////////////////

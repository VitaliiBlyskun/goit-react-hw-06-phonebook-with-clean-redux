import { useDispatch } from "react-redux";
import { deleteContact } from "redux/actions";
import { Button } from "./DeleteContact.styled";

export const DeleteContactButton = ({ contact }) => {

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id))

  return (
     <Button type="button" onClick={handleDelete}>
        Delete
     </Button>
  );
};

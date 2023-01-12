// import PropTypes from 'prop-types';
import { useDispatch  } from "react-redux";
import { contactFilter } from "redux/actions";

import { Label } from "./Filter.styled";

const Filter = () => {
  // const filtered = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleChange = event => {
    // console.log(event.currentTarget.value);
      dispatch(contactFilter(event.currentTarget.value));
      console.log(dispatch(contactFilter(event.currentTarget.value)));
  };

  return (
    <Label>
      Finds contacts by name 
      <br/>
      <br/>
      <input type="text" onChange={handleChange} />
    </Label>
  )
};

export default Filter;

// Filter.propTypes = {
//       value: PropTypes.string.isRequired,
//       onChange: PropTypes.func.isRequired,
// };
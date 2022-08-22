import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contactsSelector';
import { filterContacts } from '../../redux/contacts/contactsSlice';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        onChange={e => dispatch(filterContacts(e.target.value))}
        name="filter"
        value={filter}
        required
      />
    </label>
  );
}

export default Filter;

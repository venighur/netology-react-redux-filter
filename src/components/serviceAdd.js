import { useDispatch, useSelector } from 'react-redux';
import { addService, updateService, changeServiceField, clearForm } from '../redux/actions';

function ServiceAdd() {
  const dispatch = useDispatch();
  const { id, name, price } = useSelector(state => state.add);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(id ? updateService(id, name, price) : addService(name, price));
    dispatch(clearForm());
  }

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch(changeServiceField(name, value));
  }

  const handleClick = e => {
    e.preventDefault();
    dispatch(clearForm());
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="id" value={id} hidden readOnly/>
      <input name='name' onChange={handleChange} value={name} />
      <input name='price' onChange={handleChange} value={price} />

      <button type='submit'>Save</button>
      {(!!name || !!price) && <button onClick={handleClick}>Cancel</button>}
    </form>
  )
}

export default ServiceAdd;
import { useDispatch, useSelector } from 'react-redux';
import { clearForm, removeService, setFormValues } from '../redux/actions';

function ServiceList() {
  const dispatch = useDispatch();
  const services = useSelector(state => state.list);

  const handleEdit = id => {
    const { name, price } = services.find(service => service.id === id);
    dispatch(setFormValues(id, name, price));
  }

  const handleRemove = id => {
    dispatch(removeService(id));
    dispatch(clearForm());
  }

  return (
    <ul>
      {services.map(service => (
        <li className="service" key={service.id}>
          {service.name} {service.price}
          <button className="btn" onClick={() => handleEdit(service.id)}>&#9998;</button>
          <button className="btn" onClick={() => handleRemove(service.id)}>&#10006;</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList;

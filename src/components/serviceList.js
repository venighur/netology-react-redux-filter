import { useDispatch, useSelector } from 'react-redux';
import { clearForm, removeService, setFilter, setFormValues } from '../redux/actions';

function ServiceList() {
  const dispatch = useDispatch();
  const services = useSelector(state => state.list);
  const filter = useSelector(state => state.filter);

  const handleEdit = id => {
    const { name, price } = services.find(service => service.id === id);
    dispatch(setFormValues(id, name, price));
  }

  const handleRemove = id => {
    dispatch(removeService(id));
    dispatch(clearForm());
  }

  const handleChange = e => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  }

  return (
    <>
      <hr />
      <input name="search" placeholder="Поиск" onChange={handleChange} />
      <ul>
        {services.filter(service => service.name.toLowerCase().includes(filter)).map(service => (
          <li className="service" key={service.id}>
            {service.name} {service.price}
            <button className="btn" onClick={() => handleEdit(service.id)}>&#9998;</button>
            <button className="btn" onClick={() => handleRemove(service.id)}>&#10006;</button>
          </li>
        ))}
      </ul>
    </>

  )
}

export default ServiceList;

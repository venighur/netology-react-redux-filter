import './App.css';
import ServiceAdd from './components/serviceAdd';
import ServiceList from './components/serviceList';

function App() {
  return (
    <div className="container">
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}

export default App;

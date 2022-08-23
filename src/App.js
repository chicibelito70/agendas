import logo from './logo.svg';
import ListadoPersonas from './Listado';
import PostFetchPersonas from './FormDatos';
import './App.css';

function App() {
  return (
    <div className='App'>
      <PostFetchPersonas/>
      <ListadoPersonas/>
    </div>
  );
}
export default App;
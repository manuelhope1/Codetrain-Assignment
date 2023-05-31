
import './App.css';
import { Container } from 'react-bootstrap';
import Navv from './components/Navv';
import Movielist from './components/Movielist';
import Movielistfunc from './components/Movielistfunc';

function App() {
  return (
    <Container fluid>
      <Navv />
      <Movielist />
      <Movielistfunc />
    </Container>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from './components/Inicio';
import Tienda from './components/Tienda';
import Item from './components/Item';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={Inicio}
        />
        <Route 
          exact
          path="/tienda"
          component={Tienda}
        />
        <Route 
          exact
          path="/item/:id"
          component={Item}
        />
      </Switch>
    </Router>
  );
}

export default App;

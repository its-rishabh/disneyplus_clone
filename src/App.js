import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./Login";
import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
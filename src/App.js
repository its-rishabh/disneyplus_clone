import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./Login";
import Header from './Header';
import './App.css';
import Home from './Home';
import Detail from './Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import { useState } from 'react';
import AuthPage from './AuthPage';
import SearchPage from './SearchPage';
import ListPage from './ListPage';
import { logout } from './services/fetch-utils';
import './App.css';

function App() {
  const [user, setUser] = useState('');

  return (
    <Router>
      <div className="App">
        {
          user &&
        <div>
          <NavLink activeClassName='active-class'>Find Movies</NavLink>
          <NavLink activeClassName='active-class'>Saved Movies</NavLink>
          <button onClick={logout}>Logout</button>
        </div>
        }
      
      </div>
    </Router>
  );
}

export default App;

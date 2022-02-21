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
          <NavLink activeClassName='active-class' to='/search'>Find Movies</NavLink>
          <NavLink activeClassName='active-class' to='/saved'>Saved Movies</NavLink>
          <button onClick={logout}>Logout</button>
        </div>
        }

        <Switch>
          <Route exact path='/'>
            {
              user  
                ? <Redirect to='/search' />
                : <AuthPage setUser={setUser} />
            }
          </Route>

          <Route exact path='/search'>
            {
              user
                ? <SearchPage />
                : <Redirect to='/' />
            }
          </Route>

          <Route exact path='/saved'>
            {
              user
                ? <ListPage />
                : <Redirect to='/' />
            }
          </Route>
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;

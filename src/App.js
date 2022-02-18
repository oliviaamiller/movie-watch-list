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
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

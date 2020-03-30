import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Formik from './components/Fomik';
import HookForBasic from './components/HookFormBasic';
import HookFormWithThirdPartyLib from './components/HookFormWithThirdPartyLib';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/formik">Formik</Link>
          </li>
          <li>
            <Link to="/hook-form">HookForBasic</Link>
          </li>
          <li>
            <Link to="/hook-form-third-lib">HookFormWithThirdPartyLib</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/formik">
          <Formik />
        </Route>
        <Route path="/hook-form">
          <HookForBasic />
        </Route>
        <Route path="/hook-form-third-lib">
          <HookFormWithThirdPartyLib />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

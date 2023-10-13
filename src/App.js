import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './layouts/mainPage';
import StudentFormPage from './layouts/studentFormPage';
import StudentCardPage from './layouts/studentCardPage';

function App() {
  return <>
  <Switch>
  <Route path="/form" component={StudentFormPage}></Route>
  <Route path="/studentCard" component={StudentCardPage}></Route>
  <Route path="/" component={MainPage}></Route>
  </Switch>
  </>
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './layouts/mainPage';
import StudentFormPage from './layouts/studentFormPage';

function App() {
  return <>
  <Switch>
  <Route path="/form" component={StudentFormPage}></Route>
  <Route path="/" component={MainPage}></Route>
  </Switch>
  </>
}

export default App;

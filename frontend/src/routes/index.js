import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '~/pages/SignIn';
import StudentList from '~/pages/Student/StudentList';
import StudentRegister from '~/pages/Student/StudentRegister';
// import { Container } from './styles';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/students" exact component={StudentList} isPrivate />
      <Route path="/students/new" component={StudentRegister} isPrivate />
      <Route path="/students/edit" component={StudentRegister} isPrivate />
      <Route path="/plans" exact component={StudentRegister} isPrivate />
    </Switch>
  );
}

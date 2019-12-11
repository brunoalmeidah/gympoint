import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '~/pages/SignIn';
import StudentList from '~/pages/Student/StudentList';
import StudentRegister from '~/pages/Student/StudentRegister';
import PlanList from '~/pages/Plan/PlanList';
import PlanRegister from '~/pages/Plan/PlanRegister';
import RegistrationList from '~/pages/Registration/RegistrationList';
import RegistrationRegister from '~/pages/Registration/RegistrationRegister';
// import { Container } from './styles';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" exact component={StudentList} isPrivate />
      <Route path="/students/new" component={StudentRegister} isPrivate />
      <Route path="/students/edit/:id" component={StudentRegister} isPrivate />

      <Route path="/plans" exact component={PlanList} isPrivate />
      <Route path="/plans/new" component={PlanRegister} isPrivate />
      <Route path="/plans/edit/:id" component={PlanRegister} isPrivate />

      <Route
        path="/registrations"
        exact
        component={RegistrationList}
        isPrivate
      />
      <Route
        path="/registrations/new"
        component={RegistrationRegister}
        isPrivate
      />
      <Route
        path="/registrations/edit/:id"
        component={RegistrationRegister}
        isPrivate
      />
    </Switch>
  );
}

import { Switch, Route, Redirect } from 'react-router-dom';
import React, { useContext } from 'react';

import { Context } from '../contexts/AuthContext';
import Login  from '../pages/login/login';
import Home  from '../pages/home/home';
import Schedules from '../pages/schedules/schedules';
import { RegisterPatient } from '../pages/registerPatient/RegisterPatient';

function CustomRoute({ isPrivate, ...rest }) {
  const { authenticated } = useContext(Context);

  if (isPrivate && !authenticated) {
    return <Redirect to='/' />
  }
  return <Route { ...rest }/>
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/" component={Login} />
      <CustomRoute isPrivate exact path="/home" component={Home} />
      <CustomRoute isPrivate exact path="/register-patient" component={RegisterPatient} />
      <CustomRoute isPrivate exact path="/schedules" component={Schedules} />
    </Switch>
  );
}
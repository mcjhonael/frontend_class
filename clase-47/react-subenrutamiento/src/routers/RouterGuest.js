import React from 'react'
import { Route,Switch}from "react-router-dom"
import GuestLanding from '../modules/guest/screen/GuestLanding'
import GuestNosotros from '../modules/guest/screen/GuestNosotros';
const RouteGuest = () => {
  return (
    <Switch>
      <Route path={"/nosotros"} component={GuestNosotros} />
      <Route path={"/"} component={GuestLanding} />
    </Switch>
  );
}

export default RouteGuest

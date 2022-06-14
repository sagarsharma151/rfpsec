import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Dashboards = ({ match }) => {
  return(
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/default`} component={lazy(() => import(`./default`))} />
      <Route path={`${match.url}/data`} component={lazy(() => import(`./AdminData`))} />
      {/* <Route path={`${match.url}/stripe`} component={lazy(()=> import(`./Stripe`))} /> */}
      <Route path={`${match.url}/analytic`} component={lazy(() => import(`../liveopportunities/analytic`))} />
      <Route path={`${match.url}/sales`} component={lazy(() => import(`./sales`))} />
      {/* <Route path={`${match.url}/register-1`} component={lazy(() => import(`../../auth-views/authentication/register-1/index`))} />
      <Route path={`${match.url}/forgot-password`} component={lazy(() => import(`../../auth-views/authentication/forgot-password`))} />
      <Route path={`${match.url}/forget-password`} component={lazy(() => import(`../../auth-views/authentication/forget-password`))} />
      <Route path={`${match.url}/validation`} component={lazy(() => import(`../../auth-views/authentication/validation`))} />
        <Route path={`${match.url}/loginValidation`} component={lazy(() => import(`../../auth-views/authentication/loginValidation`))} /> */}
      <Redirect from={`${match.url}`} to={`${match.url}/default`} />
    </Switch>
  </Suspense>
)};

export default Dashboards;
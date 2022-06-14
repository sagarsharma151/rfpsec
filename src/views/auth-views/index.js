import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { AUTH_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = ({math}) => {

  return (
    <Suspense fallback={<Loading cover="page"/>}>
      <Switch>
        <Route path={`${AUTH_PREFIX_PATH}/login`} component={lazy(() => import(`./authentication/login`))} />s
        <Route path={`${AUTH_PREFIX_PATH}/login-1`} component={lazy(() => import(`./authentication/login-1`))} />
        <Route path={`${AUTH_PREFIX_PATH}/login-2`} component={lazy(() => import(`./authentication/login-2`))} />
        {/* <Route path={`${AUTH_PREFIX_PATH}/register-1`} component={lazy(() => import(`./authentication/register-1`))} /> */}
        {/* <Route path={`${AUTH_PREFIX_PATH}/register-2`} component={lazy(() => import(`./authentication/register-2`))} />
        <Route path={`${AUTH_PREFIX_PATH}/forgot-password`} component={lazy(() => import(`./authentication/forgot-password`))} />
        <Route path={`${AUTH_PREFIX_PATH}/forget-password`} component={lazy(() => import(`./authentication/forget-password`))} />
        <Route path={`${AUTH_PREFIX_PATH}/validation`} component={lazy(() => import(`./authentication/validation`))} />
        <Route path={`${AUTH_PREFIX_PATH}/loginValidation`} component={lazy(() => import(`./authentication/loginValidation`))} /> */}
         <Route path={`${AUTH_PREFIX_PATH}/success`} component={lazy(() => import(`./authentication/contact/Contactmsg`))} />
         <Route path={`${AUTH_PREFIX_PATH}/forgot-password`} component={lazy(() => import(`./authentication/forgot-password`))} />
        <Route path={`${AUTH_PREFIX_PATH}/forget-password`} component={lazy(() => import(`./authentication/forget-password`))} />
        <Route path={`${AUTH_PREFIX_PATH}/validation`} component={lazy(() => import(`./authentication/validation`))} />
        <Route path={`${AUTH_PREFIX_PATH}/loginValidation`} component={lazy(() => import(`./authentication/loginValidation`))} />
        <Route path={`${AUTH_PREFIX_PATH}/userservices/api/register`} component={lazy(() => import(`./authentication/register-2/Multistep`))} />
        <Route path={`${AUTH_PREFIX_PATH}/contact`} component={lazy(() => import(`./authentication/contact/Contact`))} />
        <Redirect from={`${AUTH_PREFIX_PATH}`} to={`${AUTH_PREFIX_PATH}/userservices/api/register`} />
        <Route path={`${AUTH_PREFIX_PATH}/error-1`} component={lazy(() => import(`./errors/error-page-1`))} />
        <Route path={`${AUTH_PREFIX_PATH}/error-2`} component={lazy(() => import(`./errors/error-page-2`))} />
        <Redirect from={`${AUTH_PREFIX_PATH}`} to={`${AUTH_PREFIX_PATH}/login`} />

      </Switch>
    </Suspense>
  )
}

export default AppViews;


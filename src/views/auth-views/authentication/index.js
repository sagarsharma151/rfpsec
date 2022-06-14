import React, { Suspense } from "react";
import {Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import { useSelector } from 'react-redux'
const Forms = ({ match }) => {
  const data = useSelector(state=>state.auth.token);
  console.log(data,'data129')
  const email = localStorage.getItem("emailId")
  console.log(email,'email90')
 return(
   
   <>
    <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
    {/* <Route path={`${match.url}/register-1`} component={lazy(() => import(`../authentication/register-1`))} />
        <Route path={`${match.url}/register-2`} component={lazy(() => import(`../authentication/register-2`))} /> */}
        {/* <Route path={`${match.url}/forgot-password`} component={lazy(() => import(`../authentication/forgot-password`))} />
        <Route path={`${match.url}/forget-password`} component={lazy(() => import(`../authentication/forget-password`))} />
        <Route path={`${match.url}/validation`} component={lazy(() => import(`../authentication/validation`))} />
        <Route path={`${match.url}/loginValidation`} component={lazy(() => import(`../authentication/loginValidation`))} />
        <Route path={`${match.url}/userservices/api/register`} component={lazy(() => import(`../authentication/register-2/Multistep`))} />
        <Route path={`${match.url}/contact`} component={lazy(() => import(`../authentication/contact/Contact`))} />
        <Redirect from={`${match.url}`} to={`${match.url}/userservices/api/register`} /> */}
    </Switch>
  </Suspense></>
 )
 };

export default Forms;
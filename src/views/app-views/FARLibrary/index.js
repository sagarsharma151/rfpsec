import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
const FarLibrary = ({ match }) => {
    console.log(match.url);
  return(
    <Suspense fallback={<Loading cover="content"/>}>
        <Switch>
          <Route path={`${match.url}/library`} component={lazy(() => import(`./farLib`))} />
          <Route path={`${match.url}/farLibraryLink`} component={lazy(() => import(`./linktabs/FarLibraryLink`))} />
          <Route path={`${match.url}/singleFarLink`} component={lazy(() => import(`./linktabs/SingleFarLink`))} />
          <Redirect exact from={`${match.url}`} to={`${match.url}/library`} />
        </Switch>
      </Suspense>
)};
export default FarLibrary;
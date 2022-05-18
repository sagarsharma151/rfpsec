import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import AdvanceButton from "./advancebutton/AdvanceButton";
import SearchButton from "./searchbutton/SearchButton";

export const Routing = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
          <Route path={`${match.url}/library`} component={lazy(() => import(`./farLib`))} />
          <Route path={`${match.url}/farLibraryLink`} component={lazy(() => import(`./linktabs/FarLibraryLink`))} />
          <Route path={`${match.url}/singleFarLink`} component={lazy(() => import(`./linktabs/SingleFarLink`))} />
        <Redirect exact from={`${match.url}`} to={`${match.url}/library`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(Routing);

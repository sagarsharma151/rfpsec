import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import AnalyticDashboard from "./liveopportunities/analytic";
import RecommendedOpportunities from "./recommendedOpportunities";
import Pipeline from "./pipeline";
import TabsOfLiveOpportunities from './liveopportunities/TabsOfLiveOpportunities/TabsOfLiveOpportunities';
import TeamingPartners from "./teamingPartners";
import AdvanceButton from "./teamingPartners/advancebutton/AdvanceButton";
import SearchButton from "./teamingPartners/searchbutton/SearchButton";
import TeamingProfile from "./teamingPartners/searchbutton/favorites/profiles/TeamingProfile";
import IncumbentSearch from "./IncumbentSearch";
import SpendAnalytics from "./SpendAnalytics/SpendAnalytics";
import Documents from "./Documents/Documents";
import Notifications from "./Notifications/Notifications";
// import FarLibrary from "./FARLibrary/FarLibrary";
import StickyChat from "./StickyChat/StickyChat";
// import FarLibraryLink from "./FARLibrary/linktabs/FarLibraryLink";
// import SingleFarLink from "./FARLibrary/linktabs/SingleFarLink";
export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/dashboards`} component={lazy(() => import(`./dashboards`))} />
        <Route path={`${APP_PREFIX_PATH}/liveopportunities`} component={AnalyticDashboard} />
        <Route path={`${APP_PREFIX_PATH}/TabsOfLiveOpportunities`} component={TabsOfLiveOpportunities} />
        <Route path={`${APP_PREFIX_PATH}/StickyChat`} component={StickyChat} />
        <Route path={`${APP_PREFIX_PATH}/recommendedOpportunities`} component={RecommendedOpportunities} />
        <Route path={`${APP_PREFIX_PATH}/pipeline`} component={Pipeline} />
        <Route path={`${APP_PREFIX_PATH}/teamingPartners`} component={TeamingPartners} />
        <Route path={`${APP_PREFIX_PATH}/temaingParters/AdvanceButton`} component={AdvanceButton} />
        <Route path={`${APP_PREFIX_PATH}/temaingParters/SearchButton`} component={SearchButton} />
        <Route path={`${APP_PREFIX_PATH}/TeamingProfile`} component={TeamingProfile} />
        <Route path={`${APP_PREFIX_PATH}/incumbentSearch`} component={IncumbentSearch} />
        <Route path={`${APP_PREFIX_PATH}/spendAnalytics`} component={SpendAnalytics} />
        <Route path={`${APP_PREFIX_PATH}/documents`} component={Documents} />
        <Route path={"/app/liveopportunities"} component={AnalyticDashboard}/>
        <Route path={`${APP_PREFIX_PATH}/notifications`} component={Notifications} />
        <Route path={`${APP_PREFIX_PATH}/library`} component={lazy(() => import(`./FARLibrary`))} />
        {/* <Route path={`${APP_PREFIX_PATH}/FarLibrary`} component={lazy(() => import(`./FARLibrary`))} /> */}
        {/* <Route path={`${APP_PREFIX_PATH}/SingleFarLink`} component={SingleFarLink} /> */}
        {/* <Route path={`${match.url}/affix`} component={AffixComponent} /> */}
        <Route path={`${APP_PREFIX_PATH}/apps`} component={lazy(() => import(`./apps`))} />
        <Route path={`${APP_PREFIX_PATH}/register`} component={lazy(() => import(`../auth-views/authentication`))} />
        <Route path={`${APP_PREFIX_PATH}/components`} component={lazy(() => import(`./components`))} />
        <Route path={`${APP_PREFIX_PATH}/pages`} component={lazy(() => import(`./pages`))} />
        <Route path={`${APP_PREFIX_PATH}/maps`} component={lazy(() => import(`./maps`))} />
        <Route path={`${APP_PREFIX_PATH}/charts`} component={lazy(() => import(`./charts`))} />
        <Route path={`${APP_PREFIX_PATH}/docs`} component={lazy(() => import(`./docs`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/dashboards`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);

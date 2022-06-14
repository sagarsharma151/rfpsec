import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import Profile from "./profile"
import Dashboard from './Dashboard';
import LiveOpportunity from './LiveOpportunuty';
import Pipeline from './Pipeline';
import Document from './Document';
import SubscriptionPlan from './SubscriptionPlan';
import UserState from './Userstate'
import Userform from './Userform'
const reducers = combineReducers({
    theme: Theme,
    profile: Profile,
    auth: Auth,
    dashboard: Dashboard,
    liveopportunity: LiveOpportunity,
    pipeline: Pipeline,
    document: Document,
    subscriptionPlan:SubscriptionPlan,
    Userstate:UserState,
    Userform:Userform,
});

export default reducers;
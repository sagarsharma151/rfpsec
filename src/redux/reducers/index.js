import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import Profile from "./profile"
import Dashboard from './Dashboard';
import LiveOpportunity from './LiveOpportunuty';
import Pipeline from './Pipeline';
import Document from './Document';

const reducers = combineReducers({
    theme: Theme,
    profile: Profile,
    auth: Auth,
    dashboard: Dashboard,
    liveopportunity: LiveOpportunity,
    pipeline: Pipeline,
    document: Document,
});

export default reducers;
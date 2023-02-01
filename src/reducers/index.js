import { combineReducers } from 'redux';

import auth from './auth';
import message from './messsage';
import theme from './theme';

export default combineReducers({
    auth,
    message,
    theme,
});
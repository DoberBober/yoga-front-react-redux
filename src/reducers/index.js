import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { hasError, isLoading } from './common';
import { mainInfo } from './mainInfo';
import { subscriptions } from './subscriptions';
import { directions } from './directions';
import { reviews } from './reviews';
import { directionsPage } from './directionsPage';

export default combineReducers({
	routing: routerReducer,
	hasError,
	isLoading,
	mainInfo,
	subscriptions,
	directions,
	directionsPage,
	reviews
})

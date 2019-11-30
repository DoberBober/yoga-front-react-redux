import React from 'react';
import { render } from 'react-dom';
// import { render } from 'react-snapshot';
import Root from './root';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';

import allReducers from './reducers/';

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(createBrowserHistory(), store);

render(
	<Provider store={store}>
		<Root history={history} />
	</Provider>,
	document.getElementById('app')
);

if (module.hot) {
	module.hot.accept();
}

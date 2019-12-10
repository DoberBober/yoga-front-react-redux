import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-snapshot';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { store } from './helpers/createStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

const history = syncHistoryWithStore(createBrowserHistory(), store);

import Root from './root';

ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<Root history={history} />
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);

if (module.hot) {
	module.hot.accept();
}

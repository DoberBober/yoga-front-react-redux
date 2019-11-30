import React from 'react';
import { hot } from 'react-hot-loader/root';

import './styles/styles.styl';

import App from './components/app/app.js';

import { API } from './helpers/const';

class Root extends React.Component {
	render() {
		return (
			<App history={this.props.history} />
		)
	}
}

export default hot(Root);




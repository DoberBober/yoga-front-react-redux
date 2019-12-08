import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Switch } from "react-router-dom";

import './styles/styles.styl';

import { renderRoutes } from 'react-router-config';
import Routes from './helpers/routes';


class Root extends React.Component {
	render() {
		return (
			<Switch>
				{renderRoutes(Routes)}
			</Switch>
		)
	}
}

export default hot(Root);

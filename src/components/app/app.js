import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Top from '../top/';
import Directions from '../directions/';
import Subscription from '../subscription/';
import Reviews from '../reviews/';
import TrialLesson from '../trialLesson/';

import Nav from '../nav/';
import Footer from '../footer/';

import DirectionsPage from '../directionsPage/';
import NotFound from '../404/';


import { API } from '../../helpers/const';

import { connect } from 'react-redux';
import { fetchMainInfo } from './actions';

const mapStateToProps = (state) => {
	return {
		mainInfo: state.mainInfo,
		hasError: state.hasError,
		isLoading: state.isLoading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (url) => dispatch(fetchMainInfo(url))
	}
}


class App extends React.Component {
	componentDidMount(){
		this.props.fetchData(API + 'main')
	}
	render() {
		return (
			<Router history={this.props.history}>
				<Nav phone={this.props.mainInfo.phone} />
				<Switch>
					<Route exact path='/' render={props => {
						return(
							<React.Fragment>
								<Top />
								<Directions />
								<Subscription />
								<Reviews />
								<TrialLesson />
							</React.Fragment>
						)
					}} />

					<Route exact path="/directions" component={DirectionsPage} />
					<Route component={NotFound} />
				</Switch>
				<Footer contacts={this.props.mainInfo} />
			</Router>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

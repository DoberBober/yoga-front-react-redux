import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { API } from '../../helpers/const';

import { connect } from 'react-redux';
import { fetchMainInfo } from './actions';

import Nav from '../nav/';
import Footer from '../footer/';

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
			<React.Fragment>
				<Nav />
				{this.props.children}
				<Footer />
			</React.Fragment>
		)
	}
}


function loadData(store){
	return store.dispatch(fetchMainInfo(API + 'main'))
}

export { loadData }

export default connect(mapStateToProps, mapDispatchToProps)(App)

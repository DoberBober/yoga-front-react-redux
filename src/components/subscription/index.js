import React, { Component } from 'react';

import SomethingWrong from '../somethingWrong';
import Loading from '../loading';

import './subscription.styl';

import { API } from '../../helpers/const';

import { connect } from 'react-redux';
import { fetchSubscriptions, setCurrentSubscription } from './actions';

const mapStateToProps = (state) => {
	return {
		subscriptions: state.subscriptions,
		currentSubscription: state.currentSubscription,
		hasError: state.hasError,
		isLoading: state.isLoading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (url) => dispatch(fetchSubscriptions(url)),
		change: (typo) => dispatch(setCurrentSubscription(typo))
	}
}

class Subscription extends Component {
	constructor(props){
		super(props)
		this.changeCurrentSubscription = this.changeCurrentSubscription.bind(this)
	}
	changeCurrentSubscription(evt){
		evt.preventDefault()
		this.props.change(evt.target.dataset.plan)
	}
	componentDidMount(){
		this.props.fetchData(API + 'subscriptions')
	}
	render() {
		if (this.props.hasError) {
			return <SomethingWrong />
		}

		if (this.props.isLoading) {
			return <Loading />;
		}
		return (
			<section className="subscription">
				<div className="container">
					<h2 className="heading">Абонементы</h2>
					<div className="subscription__plans">
						{this.props.subscriptions.types && this.props.subscriptions.types.map((type, index) => {
							return(
								<a key={index} href="#" onClick={this.changeCurrentSubscription} className={"subscription__plan" + (this.props.subscriptions.currentSubscription === type ? ' subscription__plan--active' : '')} data-plan={type}>{type}</a>
							)
						})}
					</div>

					<div className="subscription__list">
						{this.props.subscriptions.items && this.props.subscriptions.items.map((item, index) => {
							if(this.props.subscriptions.currentSubscription === item.type){
								return(
									<div key={index} className="subscription__item subscription__item--active" data-plan={item.type}>
										<div className="subscription__name">{item.title}</div>
										<div className="subscription__info" dangerouslySetInnerHTML={{__html: item.description}}></div>
										<div className="subscription__price">{item.price}</div>
										<a href="#" className="subscription__link">Заказать абонемент</a>
									</div>
								)
							}
						})}
					</div>
				</div>
			</section>
		)
	}
}

function loadData(store){
	return store.dispatch(fetchSubscriptions(API + 'subscriptions'))
}

export { loadData }

export default connect(mapStateToProps, mapDispatchToProps)(Subscription)

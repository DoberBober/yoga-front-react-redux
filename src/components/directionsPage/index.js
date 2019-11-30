import React, { Component } from 'react';
import { Link } from "react-router-dom";

import SomethingWrong from '../somethingWrong';
import Loading from '../loading';

import RightIcon from './right.svg'

import { API } from '../../helpers/const';

import { connect } from 'react-redux';
import { fetchDirectionsPage } from './actions';

const mapStateToProps = (state) => {
	return {
		directionsPage: state.directionsPage,
		hasError: state.hasError,
		isLoading: state.isLoading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (url) => dispatch(fetchDirectionsPage(url))
	}
}

class DirectionsPage extends Component {
	componentDidMount(){
		this.props.fetchData(API + 'directions')
	}
	render() {
		if (this.props.hasError) {
			return <SomethingWrong />
		}

		if (this.props.isLoading) {
			return <Loading />;
		}
		return (
			<article className="directions">
				<div className="container directions__container">
					<h2 className="heading">Направления</h2>
					<div className="directions__list directions__list--page">
						{this.props.directionsPage.map((item) => {
							return(
								<div key={item.id} className="directions__item directionsItem">
									<img src="https://via.placeholder.com/632x471.png" width="632" height="471" alt={item.title} className="directionsItem__img" />
									<div className="directionsItem__wrapper">
										<h3 className="directionsItem__title">{item.title}</h3>
										<div className="directionsItem__time" dangerouslySetInnerHTML={{__html: item.time}}></div>
										<div className="directionsItem__trainer">
											Инструктор
											<span>{item.trainer}</span>
										</div>
										<a href={item.link} className="directionsItem__link" aria-label="Подробнее">
											<RightIcon width="7" height="11" />
										</a>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</article>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectionsPage)

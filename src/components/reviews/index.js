import React, { Component } from 'react';

import SomethingWrong from '../somethingWrong';
import Loading from '../loading';

import './reviews.styl';

import VkIcon from './vk.svg'
import TwitterIcon from './twitter.svg'
import QuoteIcon from './quote.svg'

import Flickity from 'react-flickity-component'

import { API } from '../../helpers/const';

import { connect } from 'react-redux';
import { fetchReviews } from './actions';

const mapStateToProps = (state) => {
	return {
		reviews: state.reviews,
		hasError: state.hasError,
		isLoading: state.isLoading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (url) => dispatch(fetchReviews(url))
	}
}

const flickityOptions = {
	initialIndex: 2,
	autoPlay: 5000,
	pauseAutoPlayOnHover: true,
	wrapAround: true,
	fullscreen: true,
	adaptiveHeight: true,
	pageDots: false
}

class Reviews extends Component {
	componentDidMount(){
		this.props.fetchData(API + 'reviews')
	}
	render() {
		if (this.props.hasError) {
			return <SomethingWrong />
		}

		if (this.props.isLoading) {
			return <Loading />;
		}
		return (
			<section className="reviews">
				<div className="container reviews__container">
					<h3 className="heading">Отзывы</h3>
					<div className="reviews__list">
						{this.props.reviews.length &&
							<Flickity
								options={flickityOptions}
							>
								{this.props.reviews.map((review) => {
									return(
										<div className="reviews__item" key={review.id}>
											<QuoteIcon className="reviews__icon" width="34" height="15" aria-hidden="true" />
											<div className="reviews__text" dangerouslySetInnerHTML={{__html: review.text}}></div>
											<div className="reviews__author">
												<img width="52" height="52" src="https://via.placeholder.com/52x52.png" alt={review.name} className="reviews__img"/>
												<div className="reviews__wrapper">
													<h4 className="reviews__name">{review.name}</h4>
													<div className="reviews__date">{review.date}</div>
													{(review.vk || review.twitter) &&
														<ul className="reviews__social social">
															{review.vk &&
																<li>
																	<a href={review.vk} aria-label={review.name + " в Вконтакте"}>
																		<VkIcon width="13" height="8" />
																	</a>
																</li>
															}
															{review.twitter &&
																<li>
																	<a href={review.twitter} aria-label={review.name + " в Твиттере"}>
																		<TwitterIcon width="15" height="10" />
																	</a>
																</li>
															}
														</ul>
													}
												</div>
											</div>
										</div>
									)
								})}
							</Flickity>
						}
					</div>
				</div>
			</section>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)

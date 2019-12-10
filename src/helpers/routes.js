import React from 'react';

import App, { loadData as loadDataApp } from './../components/app/app.js';

import Top from './../components/top/';
import Directions, { loadData as loadDataDirections } from './../components/directions/';
import Subscription, { loadData as loadDataSubscription } from './../components/subscription/';
import Reviews, { loadData as loadDataReviews } from './../components/reviews/';
import TrialLesson from './../components/trialLesson/';

import DirectionsPage, { loadData as loadDataDirectionsPage } from './../components/directionsPage/';

import NotFound, { loadData as loadDataNotFound } from './../components/404/';

export default [
	{
		loadData: [loadDataApp, loadDataDirections, loadDataSubscription, loadDataReviews],
		path: '/',
		component: ({history}) => {
			return(
				<App>
					<Top />
					<Directions />
					<Subscription />
					<Reviews />
					<TrialLesson />
				</App>
			)
		},
		exact: true
	},
	{
		loadData: loadDataDirectionsPage,
		path: '/directions',
		component: ({history}) => {
			return(
				<App>
					<DirectionsPage />
				</App>
			)
		},
		exact: true
	},
	{
		component: NotFound
	}
];

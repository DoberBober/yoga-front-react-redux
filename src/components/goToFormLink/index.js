import React, { Component } from 'react';

import './goToFormLink.styl';
import RightIcon from './right.svg';

class GoToFormLink extends Component {
	render() {
		return (
			<a className="goToFormLink" href="#trialLesson">
				<span>
					<RightIcon width="8" height="10" />
				</span>
				Запишитесь на бесплатное
				<br />
				пробное занятие
			</a>
		)
	}
}

export default GoToFormLink;

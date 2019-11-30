import React, { Component } from 'react';

import './top.styl';

import GoToFormLink from '../goToFormLink/';

class Top extends Component {
	render() {
		return (
			<section className="top">
				<div className="container top__container">
					<h1 className="top__title">Почувствуй расслабление в своем теле</h1>
					<b className="top__subtitle">YOGA</b>
					<GoToFormLink />
				</div>
			</section>
		)
	}
}

export default Top;

import React, { Component } from 'react';

import './trialLesson.styl';

class TrialLesson extends Component {
	render() {
		return (
			<section className="trialLesson" id="trialLesson">
				<div className="container trialLesson__container">
					<form action="#" method="POST">
						<h3 className="heading trialLesson__heading">Запишитесь на бесплатное пробное занятие</h3>
						<label className="visually-hidden" htmlFor="name">Ваше имя</label>
						<input className="trialLesson__input" type="text" id="name" name="name" placeholder="Ваше имя" required />

						<label className="visually-hidden" htmlFor="phone">Ваш телефон</label>
						<input className="trialLesson__input" type="tel" id="phone" name="phone" placeholder="Ваш телефон" required />

						<button className="trialLesson__btn" type="submit">Оставить заявку</button>
					</form>
				</div>
			</section>
		)
	}
}

export default TrialLesson;

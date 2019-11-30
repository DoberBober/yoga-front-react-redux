import React, { Component } from 'react';

import './footer.styl';

import VkIcon from './vk.svg'
import TwitterIcon from './twitter.svg'
import FbIcon from './fb.svg'

class Footer extends Component {
	render() {
		return (
			<footer className="mainFooter">
				{this.props.contacts &&
					<div className="container mainFooter__container">
						{this.props.contacts.address &&
							<section className="mainFooter__section">
								<b>Адрес:</b>{this.props.contacts.address}
							</section>
						}
						{this.props.contacts.time &&
							<section className="mainFooter__section">
								<b>График работы:</b>{this.props.contacts.time}
							</section>
						}
						{this.props.contacts.phone &&
							<section className="mainFooter__section">
								<b>Телефон:</b>{this.props.contacts.phone}
							</section>
						}
						{this.props.contacts.email &&
							<section className="mainFooter__section">
								<b>E-mail:</b>{this.props.contacts.email}
							</section>
						}
						{(this.props.contacts.twitter || this.props.contacts.vk || this.props.contacts.fb) &&
							<ul className="mainFooter__social social">
								{this.props.contacts.vk &&
									<li>
										<a href={this.props.contacts.vk} aria-label="Мы в Вконтакте">
											<VkIcon width="25" height="15" />
										</a>
									</li>
								}
								{this.props.contacts.twitter &&
									<li>
										<a href={this.props.contacts.twitter} aria-label="Мы в Твиттере">
											<TwitterIcon width="29" height="20" />
										</a>
									</li>
								}
								{this.props.contacts.fb &&
									<li>
										<a href={this.props.contacts.fb} aria-label="Мы в Фейсбуке">
											<FbIcon width="10" height="21" />
										</a>
									</li>
								}
							</ul>
						}
						{this.props.contacts.sitename &&
							<a href="#" className="mainFooter__copyright">{this.props.contacts.sitename}</a>
						}
					</div>
				}
			</footer>
		)
	}
}

export default Footer;

import React, { Component } from 'react';
import { connect } from "react-redux";

import './footer.styl';

import VkIcon from './vk.svg'
import TwitterIcon from './twitter.svg'
import FbIcon from './fb.svg'

const mapStateToProps = state => {
  return {
    mainInfo: state.mainInfo
  };
};

class Footer extends Component {
	render() {
		return (
			<footer className="mainFooter">
				{this.props.mainInfo &&
					<div className="container mainFooter__container">
						{this.props.mainInfo.address &&
							<section className="mainFooter__section">
								<b>Адрес:</b>{this.props.mainInfo.address}
							</section>
						}
						{this.props.mainInfo.time &&
							<section className="mainFooter__section">
								<b>График работы:</b>{this.props.mainInfo.time}
							</section>
						}
						{this.props.mainInfo.phone &&
							<section className="mainFooter__section">
								<b>Телефон:</b>{this.props.mainInfo.phone}
							</section>
						}
						{this.props.mainInfo.email &&
							<section className="mainFooter__section">
								<b>E-mail:</b>{this.props.mainInfo.email}
							</section>
						}
						{(this.props.mainInfo.twitter || this.props.mainInfo.vk || this.props.mainInfo.fb) &&
							<ul className="mainFooter__social social">
								{this.props.mainInfo.vk &&
									<li>
										<a href={this.props.mainInfo.vk} aria-label="Мы в Вконтакте">
											<VkIcon width="25" height="15" />
										</a>
									</li>
								}
								{this.props.mainInfo.twitter &&
									<li>
										<a href={this.props.mainInfo.twitter} aria-label="Мы в Твиттере">
											<TwitterIcon width="29" height="20" />
										</a>
									</li>
								}
								{this.props.mainInfo.fb &&
									<li>
										<a href={this.props.mainInfo.fb} aria-label="Мы в Фейсбуке">
											<FbIcon width="10" height="21" />
										</a>
									</li>
								}
							</ul>
						}
						{this.props.mainInfo.sitename &&
							<a href="#" className="mainFooter__copyright">{this.props.mainInfo.sitename}</a>
						}
					</div>
				}
			</footer>
		)
	}
}

export default connect(mapStateToProps)(Footer);

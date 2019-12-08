import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import './nav.styl';
import MenuIcon from './menu.svg';

const mapStateToProps = state => {
  return {
    mainInfo: state.mainInfo
  };
};

class Nav extends Component {
	render() {
		return (
			<header className="mainHeader">
				<div className="mainHeader__container container">
					<button className="menuBtn" id="menuBtn" aria-label="Меню">
						<MenuIcon width="30" height="15" />
					</button>

					{this.props.mainInfo.mainPhone &&
						<div className="phone">
							<a href={"tel:" + this.props.mainInfo.mainPhone.replace(/[-()]/g, '')}>{this.props.mainInfo.mainPhone}</a>
						</div>
					}
					<nav className="mainMenu">
						<ul>
							<li>
								<NavLink exact activeClassName='menu__item--active' to="/">Главная</NavLink>
							</li>
							<li>
								<NavLink activeClassName='menu__item--active' to="/directions">Направления</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		)
	}
}

export default connect(mapStateToProps)(Nav);

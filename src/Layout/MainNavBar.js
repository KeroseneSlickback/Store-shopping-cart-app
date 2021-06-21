import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavBar.module.css';
import cart from '../imgs/cart.png';

import CartContext from '../Store/CartContext';

function MainNavBar() {
	const cartContext = useContext(CartContext);

	return (
		<header className={classes.header}>
			<div className={classes.icon}>Shopping Cart App</div>
			<nav>
				<ul>
					<li className={classes.home}>
						<Link to="/">Home Page</Link>
					</li>
					<li className={classes.cart}>
						<img src={cart} alt="Shopping Cart" />
						<Link to="/shopping-cart">Shopping Cart</Link>
						<span className={classes.span}>{cartContext.totalCart}</span>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavBar;

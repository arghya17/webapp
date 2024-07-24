import React from "react";

function NavBar(props) {
	return (
		<div>
			<ul>
				<li>
					<a href="login">Login</a>
				</li>
				<li>
					<a href="register">Register</a>
				</li>
				<li>
					<a href="userdetails">UserDetails</a>
				</li>
				<li>
					<a href="portfolio">Portfolio</a>
				</li>
			</ul>
		</div>
	);
}

export default NavBar;

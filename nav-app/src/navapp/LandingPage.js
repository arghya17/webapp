import React from "react";
import { routes } from "../route";
import { useRoutes } from "react-router-dom";
import NavBar from "./NavBar";
function LandingPage(props) {
	const element = useRoutes(routes);
	return (
		<div>
			<NavBar />
			<hr />
			{element}
		</div>
	);
}

export default LandingPage;

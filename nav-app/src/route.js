import Login from "./navapp/Login";
import Portfolio from "./navapp/Portfolio";
import Register from "./navapp/Register";
import UserDetails from "./navapp/UserDetails";

export const routes = [
	{ path: "/login", element: <Login /> },
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/userdetails",
		element: <UserDetails />,
	},
	{
		path: "/portfolio",
		element: <Portfolio></Portfolio>,
	},
];

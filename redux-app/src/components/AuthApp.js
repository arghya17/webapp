import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/authAction";
import { logout } from "../redux/actions/authAction";
function AuthApp(props) {
	const isAllowed = useSelector((state) => state.myauth);
	const dispatch = useDispatch();
	return (
		<div>
			<button onClick={() => dispatch(login())}>login</button>
			<button onClick={() => dispatch(logout())}>logout</button>
			<hr />
			{isAllowed ? (
				<div>Congratulation here is the offer</div>
			) : (
				<p>Please login</p>
			)}
		</div>
	);
}

export default AuthApp;

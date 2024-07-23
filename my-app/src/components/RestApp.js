import React, { useState } from "react";
import axios from "axios";
import RestappData from "./RestappData";
const URL = "https://jsonplaceholder.typicode.com/users";
function RestApp(props) {
	const [users, setUsers] = useState([]);
	const loadUsers = () => {
		axios
			.get(URL)
			.then((response) => response.data)
			.then((data) => {
				console.log(data);
				setUsers(data);
			});
	};
	//useEffect without any state variable is updated at the beginning when the website is loaded
	return (
		<div>
			<p> Restfull Application</p>
			<button onClick={loadUsers}>Load Users</button>
			<RestappData users={users} />
		</div>
	);
}

export default RestApp;

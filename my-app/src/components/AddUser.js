//this is a class based component

// import { Component } from "react";
export default function AddUser(props) {
	//this must be a arrow function for this to access the props otherwise this will refer to the function itself
	//in arrow function this refers to the surrounding current function
	const addUser = (e) => {
		e.preventDefault();
		const name = e.target.elements.uname.value;
		const dept = e.target.elements.dept.value;
		// alert("user is added " + name);
		props.au(name, dept);
	};
	return (
		<div>
			Add User
			<form onSubmit={addUser}>
				<input type="text" name="uname" placeholder="Enter Username"></input>
				<input type="text" name="dept" placeholder="Enter department"></input>
				<button className="btn btn-primary">Add</button>
			</form>
		</div>
	);
}

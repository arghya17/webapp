import Header from "./Header";
import Footer from "./Footer";
import AddUser from "./AddUser";
import UserData from "./UserData";
import { useEffect, useState } from "react";
function Mainapp() {
	const headerData = "Welcome to React header";
	const footerData = " fuck footer";

	//initialize state
	const [users, setUsers] = useState([]);
	const [department, setDepartment] = useState([]);

	const addUser = (user, dept) => {
		setUsers([...users, user]);
		setDepartment([...department, dept]);
	};

	const deleteAll = () => {
		setUsers([]);
		setDepartment([]);
	};

	useEffect(() => {
		localStorage.setItem("db", JSON.stringify(users));
	}, [users]);

	//useeffect for lifecycle hooks

	const deleteUser = (usr) => {
		setUsers(users.filter((user) => user !== usr));
	};
	return (
		<div>
			<div class="card">
				<div className="card-header">
					<Header
						hdata={headerData}
						del={deleteAll}
						hasData={users.length > 0}
					/>
				</div>
				<div className="card-body">
					<AddUser au={addUser} />
					<p>MainApp Component</p>
					<UserData udata={users} depts={department} du={deleteUser} />
				</div>
				<div className="card-footer">
					<Footer fdata={footerData} />
				</div>
			</div>
		</div>
	);
}

export default Mainapp;

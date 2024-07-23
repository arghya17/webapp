import React from "react";

function UserData(props) {
	return (
		<div>
			<h5>UserName</h5>
			{props.udata.map((data) => (
				<div>
					{data}
					<button onClick={() => props.du(data)} className="btn btn-danger">
						Delete
					</button>
				</div>
			))}

			<h6>Department</h6>
			{props.depts.map((data) => (
				<div>
					{data}
					<button className="btn btn-danger">Delete</button>
				</div>
			))}
		</div>
	);
}

export default UserData;

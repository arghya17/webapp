import React from "react";

function RestappData(props) {
	return (
		<div>
			{props.users.map((data) => {
				return (
					<div>
						{data.name} --------- {data.email}
					</div>
				);
			})}
		</div>
	);
}

export default RestappData;

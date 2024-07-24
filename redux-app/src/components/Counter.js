import React from "react";
import { Counterbuttons } from "./counterbuttons";
import { Counterdisplay } from "./counterdisplay";
function Counter(props) {
	return (
		<div>
			<Counterbuttons />
			<Counterdisplay />
		</div>
	);
}

export default Counter;

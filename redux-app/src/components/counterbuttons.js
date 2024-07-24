import { useDispatch } from "react-redux";
import { inc, desc } from "../redux/actions/counterAction";
export const Counterbuttons = () => {
	const dispatch = useDispatch();
	return (
		<div>
			<button onClick={() => dispatch(inc())}> INC</button>
			<button onClick={() => dispatch(desc())}> Desc</button>
		</div>
	);
};

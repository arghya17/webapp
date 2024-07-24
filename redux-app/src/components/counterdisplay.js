import { useSelector } from "react-redux";
export const Counterdisplay = () => {
	const counter = useSelector((state) => state.mycounter);
	return <div>The current state is : {counter}</div>;
};

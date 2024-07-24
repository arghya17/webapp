// import logo from './logo.svg';
import "./App.css";
// import Mainapp from "./components/Mainapp";
import React, { Suspense } from "react";
const RestApp = React.lazy(() => delay(import("./components/RestApp")));
function App() {
	return (
		<div className="App">
			<Suspense fallback={<div>loading ..... </div>}></Suspense>
			<RestApp />
		</div>
	);
}

export default App;
function delay(module) {
	return new Promise((res) => {
		setTimeout(res, 2000);
	}).then(() => module);
}

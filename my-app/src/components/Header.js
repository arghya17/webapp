function Header(props) {
	return (
		<div>
			<p>{props.hdata}</p>
			<button
				disabled={!props.hasData}
				onClick={props.del}
				className="btn btn-warning"
			>
				Delete All
			</button>
		</div>
	);
}

export default Header;

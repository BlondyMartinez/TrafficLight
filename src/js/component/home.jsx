import React from "react";
import TrafficLight from "./traffic-light";

const Home = (props) => {
	let numbers = props.numbers;
	return (
		<div className="d-flex">
			<TrafficLight />
		</div>
	);
};

export default Home;
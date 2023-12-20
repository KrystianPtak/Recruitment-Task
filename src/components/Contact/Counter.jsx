import CountUp from "react-countup";

const Counter = () => {
	return (
		<p className="contact__counter">
			<CountUp start={35000} end={0} duration={20} /> + ALREADY JOINED
		</p>
	);
};

export default Counter;

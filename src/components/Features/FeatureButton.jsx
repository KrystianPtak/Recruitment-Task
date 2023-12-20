import React from "react";

const FeatureButton = ({ buttonTitle, isActive, onClick }) => {
	return (
		<button
			className={`features__button ${
				isActive ? "features__button--active" : ""
			}`}
			onClick={onClick}
		>
			{buttonTitle}
		</button>
	);
};

export default FeatureButton;

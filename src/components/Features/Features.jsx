import "./Features.scss";
import React, { useState } from "react";
import featureData from "./featureData";
import FeatureButton from "./FeatureButton";
import FeatureContent from "./FeatureContent";

const Features = () => {
	const [activeFeature, setActiveFeature] = useState(0);
	const activeData = featureData[activeFeature];

	const handleFeatureChange = (index) => {
		setActiveFeature(index);
	};

	return (
		<section id="features" className="features container">
			<div className="features__container">
				<h2 className="features__title">Features</h2>
				<p className="features__text">
					Our aim is to make it quick and easy for you to access your favourite
					websites. Your bookmarks sync between your devices so you can access
					them on the go.
				</p>
				<div className="features__buttons">
					{featureData.map((feature, index) => (
						<FeatureButton
							key={index}
							buttonTitle={feature.buttonTitle}
							isActive={activeFeature === index}
							onClick={() => handleFeatureChange(index)}
						/>
					))}
				</div>
				<FeatureContent
					image={activeData.image}
					buttonTitle={activeData.buttonTitle}
					title={activeData.title}
					text={activeData.text}
					isActive={activeFeature === 1 || activeFeature === 2}
				/>
			</div>
		</section>
	);
};

export default Features;

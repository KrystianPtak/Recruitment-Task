const FeatureContent = ({ image, title, text, isActive }) => {
	const imageClassName = `features__img ${
		isActive ? "features__image--shifted" : ""
	}`;

	return (
		<div className="features__wrapper">
			<div className="features__image">
				<img src={image} alt={title} className={imageClassName} />
				<div className="features__background-shape"></div>
			</div>
			<div className="features__box">
				<h2 className="features__box-title">{title}</h2>
				<p className="features__box-text">{text}</p>
				<button className="features__box-btn">More info</button>
			</div>
		</div>
	);
};

export default FeatureContent;

import dots from "../../assets/bg-dots.svg";

const DownloadItem = ({ img, title, text }) => {
	return (
		<div className="download__box">
			<img src={img} alt={title} className="download__box-img" />
			<h3 className="download__box-title">{title}</h3>
			<p className="download__box-text">{text}</p>
			<img src={dots} alt="dots" className="download__box-dots" />
			<button className="download__box-button">Add & Install Extension</button>
		</div>
	);
};

export default DownloadItem;

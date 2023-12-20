import "./Download.scss";
import DownloadItem from "./DownloadItem";
import data from "./downloadData";

const Download = () => {
	return (
		<section id="pricing" className="download container">
			<h2 className="download__title">Download the extension</h2>
			<p className="download__text">
				We've got more browsers in the pipeline. Please do let us know if you've
				got a favourite you'd like us to prioritize.
			</p>
			<div className="download__container">
				{data.map((el) => (
					<DownloadItem key={el.title} {...el} />
				))}
			</div>
		</section>
	);
};

export default Download;

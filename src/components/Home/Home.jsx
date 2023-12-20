import "./Home.scss";
import hero from "../../assets/illustration-hero.svg";

const Home = () => {
	return (
		<header className="header">
			<div className="header__image">
				<img src={hero} alt="tablet" className="header__img" />
				<div class="header__background-shape"></div>
			</div>
			<div className="header__content container">
				<h1 className="header__title">a simple bookmark manager</h1>
				<p className="header__text">
					A clean and simple interface to organize your favourite websites. Open
					a new browser tab and see your sites load instantly. Try it for free.
				</p>
				<div className="header__buttons">
					<button className="header__button">Get in on Chrome</button>
					<button className="header__button">Get in on Firefox</button>
				</div>
			</div>
		</header>
	);
};

export default Home;

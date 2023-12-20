import "./Navbar.scss";
import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo-bookmark.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import close from "../../assets/icon-close.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icon-twitter.svg";
import NavLinks from "./NavLinks";
import Modal from "../Modal/Modal";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [showModalOnHover, setShowModalOnHover] = useState(false);

	const handleCloseNav = () => {
		setIsOpen(false);
	};

	return (
		<nav
			className="nav"
			style={{ position: isOpen ? "fixed" : "relative" }}
			onMouseEnter={() => setShowModalOnHover(true)}
			id="home"
		>
			<a href="#home" className={`nav__logo ${isOpen && "nav__logo--open"}`}>
				<Logo />
			</a>
			<NavLinks isOpen={isOpen} handleCloseNav={handleCloseNav} />
			<div className="nav__menu" onClick={() => setIsOpen(!isOpen)}>
				<img src={isOpen ? close : hamburger} alt={isOpen ? "Close" : "Menu"} />
			</div>
			{isOpen && (
				<div className="nav__icons">
					<FacebookIcon className="nav__icon" aria-label="Facebook" />
					<TwitterIcon className="nav__icon" aria-label="Twitter" />
				</div>
			)}
			<Modal showOnHover={showModalOnHover} />
		</nav>
	);
};

export default Navbar;

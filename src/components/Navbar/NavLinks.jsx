const NavLinks = ({ isOpen, handleCloseNav }) => (
	<div>
		<ul className={isOpen ? "nav__links nav__links-active" : "nav__links"}>
			<li>
				<a href="#features" className="nav__link" onClick={handleCloseNav}>
					Features
				</a>
			</li>
			<li>
				<a href="#pricing" className="nav__link" onClick={handleCloseNav}>
					Pricing
				</a>
			</li>
			<li>
				<a href="#contact" className="nav__link" onClick={handleCloseNav}>
					Contact
				</a>
			</li>
			<li>
				<button className="nav__link">Login</button>
			</li>
		</ul>
	</div>
);

export default NavLinks;

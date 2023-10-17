import { Link } from "react-router-dom"
import { useRef } from "react";
import logo from "../assets/images/gu-pet_logo.png"

function NavBar() {
	const navRef = useRef();

	const showNavBar = () => {
		navRef.current.classList.toggle(
			"responsive-nav"
		);
	};

	return (
		<header className="fixed-top">
			<h3 className="brand">
				
            </h3>
			<nav ref={navRef}>
				<Link to="/">Home</Link>
				<Link to="/about">About Us</Link>
                <img style={{ width: 150, height: 150 }}src={logo} alt="Gu-Pet Logo"/>
				<Link to="/services">Services</Link>
				<Link to="/gallery">Gallery</Link>
				<button className="nav-btn nav-close-btn" onClick={showNavBar}>
					<i className="fa fa-times" aria-hidden="true"></i>
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavBar}>
                <i className="fa fa-bars" aria-hidden="true"></i>
			</button>
		</header>
	);
}

export default NavBar;
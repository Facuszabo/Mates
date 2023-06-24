import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/navbar.css";
import logo from "../img/logo.png"
import { Link } from 'react-router-dom';
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<Link className="link" to={"/"}><img className="logo" src={logo}/></Link>
			<nav ref={navRef}>
      <Link className="link" to={"/"}><a>Inicio</a></Link>
      <Link className="link" to={"/contacto"}><a>Nosotros</a></Link>
      <Link className="link" to={"/mates"}><a>Mates</a></Link>
      <Link className="link" to={"/termos"}><a>Termos</a></Link>
      <Link className="link" to={"/accesorio"}><a>Accesorios</a></Link>
      <Link className="link" to={"/canasta"}><a>Canastas</a></Link>
      <Link className="link" to={"/grabados"}><a>Grabados</a></Link>
	  <Link className="link" to={"/vasos"}><a>Vasos</a></Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
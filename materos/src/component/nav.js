import React, {useState} from "react"
import "../css/nav.css"
import logo from '../img/logo.png'
import { Link } from "react-router-dom";
function Nav(){
  const [activar, setActivar] = useState("nav__menu");
  const [icono, setIcono] = useState("nav__toggler");
  const navToggle = () => {
    if (activar === "nav__menu") {
      setActivar("nav__menu nav__active");
    } else setActivar("nav__menu");

    if (icono === "nav__toggler") {
      setIcono("nav__toggler toggle");
    } else setIcono("nav__toggler");
  };
  return (
    <nav className="nav">
      <Link className="link" to={"/"}><img src={logo} className="logo"></img></Link>
      <Link className="link" to={"/"}><a className="titulo">CODIGO MATERO</a></Link>
      <ul className={activar}>
        <li className="nav-item">
        <Link className="link" to={"/"}><a className="textNav">
            Inicio
          </a></Link>
        </li>
        <li class="nav-item dropdown">
          <a class="textNav dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tienda online
          </a>
          <ul class="dropdown-menu">
          <Link className="link" to={"/mates"}><li><a class="dropdown-item">Mates</a></li></Link>
          <Link className="link" to={"/stanley"}><li><a class="dropdown-item">Stanley</a></li></Link>
          <Link className="link" to={"/canasta"}><li><a class="dropdown-item">Canastas</a></li></Link>
          <Link className="link" to={"/termos"}><li><a class="dropdown-item">Termos</a></li></Link>
          <Link className="link" to={"/accesorio"}><li><a class="dropdown-item">Accesorios</a></li></Link>
          <Link className="link" to={"/vasos"}><li><a class="dropdown-item">Vasos</a></li></Link>
          </ul>
        </li>
        <li>
        <Link className="link" to={"/contacto"}><a className="textNav">
          Contacto
          </a></Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icono}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}
export default Nav
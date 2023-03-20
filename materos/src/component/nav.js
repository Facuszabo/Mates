import React, {useState} from "react"
import "../css/nav.css"
import logo from '../img/logo.png'
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
      <img src={logo} className="logo"></img>
      <a className="titulo">CODIGO MATERO</a>
      <ul className={activar}>
        <li className="nav-item">
          <a className="textNav">
            Inicio
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="textNav dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tienda online
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="textNav">
            Adjunta tu comprobante
          </a>
        </li>
        <li>
          <a className="textNav">
          Contacto
          </a>
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
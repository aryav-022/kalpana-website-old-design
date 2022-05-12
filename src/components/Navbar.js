import React from 'react';
import  { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar(props) {
  function toggleClass(tab) {
    document.querySelectorAll(".navbar ul li a").forEach(link => {
      if (link.id !== tab) link.classList.remove('active');
      else link.classList.add('active');
    })
  }

  return (
    <nav className="navbar">
        <img className="soceity-logo" src={require('../img/kalpanacaps.png')} alt="Team Kalpana" />
        <div className="soceity-name-container">
            <div className="soceity-name">Team Kalpana</div>
            <div className="collage-name">NSUT, Delhi</div>
        </div>
        <ul>
            <li><Link id='homeLink' className="active" to="/" onClick={() => {toggleClass('homeLink'); props.setProgress(100);}}>Home</Link></li>
            <li><Link id='aboutLink' to="/about" onClick={() => {toggleClass('aboutLink'); props.setProgress(100);}}>About</Link></li>
            <li><Link id='teamLink' to="/team" onClick={() => {toggleClass('teamLink'); props.setProgress(100);}}>Team</Link></li>
            <li><Link id='journeyLink' to="/journey" onClick={() => {toggleClass('journeyLink'); props.setProgress(100);}}>Journey</Link></li>
            <li><Link id='sponsersLink' to="/sponsers" onClick={() => {toggleClass('sponsersLink'); props.setProgress(100);}}>Sponsers</Link></li>
        </ul>
    </nav>
  )
}

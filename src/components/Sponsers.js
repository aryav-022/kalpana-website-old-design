import React from 'react';
import SponsersCard from './SponsersCard';
import "../css/Sponsers.css";

export default function Sponsers() {
    return (
        <div className="sponsers-container">
            <SponsersCard sponserLogo={require('../img/cornitos.png')} sponserName="CORNITOS" />
            <SponsersCard sponserLogo={require('../img/cornitos.png')} sponserName="CORNITOS" />
            <SponsersCard sponserLogo={require('../img/cornitos.png')} sponserName="CORNITOS" />
        </div>
    )
}

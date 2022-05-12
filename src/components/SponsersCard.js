import React from 'react';
import "../css/SponsersCard.css";

export default function SponsersCard(props) {
  const {sponserLogo, sponserName} = props;
  return (
    <div className="sponsers-card" data-content={sponserName} >
        <img src={sponserLogo} alt={sponserName} />
    </div>
  )
}

import React from 'react';
import "../css/TeamCard.css";

export default function TeamCard(props) {
  return (
    <div className="team-card">
        <div className="movable-container">
            <a href="/" target="_blank" className="member-image" style={{backgroundImage: `url(${props.memberImage})`}}></a>
            <span className="member-name">{props.memberName}</span>
            <span className="member-status">{props.memberStatus}</span>
        </div>
        <div className="member-social">
            <a href={props.memberSocialPortfolioPath} target="_blank" rel="noopener noreferrer"><ion-icon name="laptop-outline"></ion-icon></a>
            <a href={props.memberSocialGithubPath} target="_blank" rel="noopener noreferrer"><ion-icon name="logo-github"></ion-icon></a>
            <a href={props.memberSocialLinkedinPath} target="_blank" rel="noopener noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href={props.memberSocialInstagramPath} target="_blank" rel="noopener noreferrer"><ion-icon name="logo-instagram"></ion-icon></a>
        </div>
    </div>
  )
}

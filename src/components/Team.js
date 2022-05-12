import React from 'react';
import TeamCard from "./TeamCard";
import "../css/Team.css"

export default function Team(props) {
    return (
        <>
        <div className="team-heading">Team Members</div>
        <div className="team-container">
            <TeamCard memberImage={require("../img/ApoorveGargCoreMember.jpg")} memberName="Apoorv Garg" memberStatus="Software Lead" memberSocialPortfolioPath="/" memberSocialGithubPath="/" memberSocialLinkedinPath="/" memberSocialInstagramPath="/"  />
            <TeamCard memberImage={require("../img/ApoorveGargCoreMember.jpg")} memberName="Alankriti Garg" memberStatus="President" memberSocialPortfolioPath="/" memberSocialGithubPath="/" memberSocialLinkedinPath="/" memberSocialInstagramPath="/"  />
            <TeamCard memberImage={require("../img/ApoorveGargCoreMember.jpg")} memberName="Garung Gupta" memberStatus="Electronics Lead" memberSocialPortfolioPath="/" memberSocialGithubPath="/" memberSocialLinkedinPath="/" memberSocialInstagramPath="/"  />
        </div>
        </>
    )
}

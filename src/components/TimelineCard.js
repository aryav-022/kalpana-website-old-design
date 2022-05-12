import React from 'react';
import "../css/TimelineCard.css";

export default function TimelineCard(props) {
  const {heading, content} = props;
  return (
    <div class="timeline-card">
        <div class="heading">{heading}</div>
        <div class="content">{content}</div>
    </div>
  )
}

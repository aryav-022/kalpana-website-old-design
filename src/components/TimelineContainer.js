import React from 'react'
import TimelineCard from './TimelineCard'
import TimelineLine from './TimelineLine';

export default function TimelineContainer(props) {
  const {timelineTime, heading, content, side} = props;
  if (side === 'right') {
    return (
      <div className="journey-container">
        {heading.length === 2 ? <TimelineCard heading={heading[0]} content={content[0]} /> : <div className='structure-maintaing-element'></div>}
        <TimelineLine date={timelineTime} />
        <TimelineCard heading={heading[0]} content={content[0]} />
      </div>
    )
  }
  return (
    <div className="journey-container">
      <TimelineCard heading={heading[0]} content={content[0]} />
      <TimelineLine date={timelineTime} />
      {heading.length === 2 ? <TimelineCard heading={heading[0]} content={content[0]} /> : <div className='structure-maintaing-element'></div>}
    </div>
  )
}

import React from 'react'
import "../css/Journey.css";
import TimelineContainer from './TimelineContainer';

export default function Journey() {
    return (
        <>
        <TimelineContainer timelineTime="1967's" heading={["CANSAT '2021"]} content={["We came first in CANSAT '2021. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi natus explicabo et, cupiditate dolore nihil nostrum neque suscipit voluptatibus."]} side="left" />
        <TimelineContainer timelineTime="1967's" heading={["CANSAT '2021"]} content={["We came first in CANSAT '2021. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi natus explicabo et, cupiditate dolore nihil nostrum neque suscipit voluptatibus."]} side="right" />
        <TimelineContainer timelineTime="1967's" heading={["CANSAT '2021"]} content={["We came first in CANSAT '2021. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi natus explicabo et, cupiditate dolore nihil nostrum neque suscipit voluptatibus."]} side="left" />
        <TimelineContainer timelineTime="1967's" heading={["CANSAT '2021", "CANSAT '2021"]} content={["We came first in CANSAT '2021. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi natus explicabo et, cupiditate dolore nihil nostrum neque suscipit voluptatibus.", "We came first in CANSAT '2021. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi natus explicabo et, cupiditate dolore nihil nostrum neque suscipit voluptatibus."]} side="right" />
        <TimelineContainer timelineTime="1967's" heading={["CANSAT '2021"]} content={["We came first in CANSAT '2021. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi natus explicabo et, cupiditate dolore nihil nostrum neque suscipit voluptatibus."]} side="left" />
        </>
    )
}

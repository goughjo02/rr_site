import React from "react";
// React Vertical Timeline stuff
// https://github.com/stephane-monnot/react-vertical-timeline
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "./fixedTimelineCss.css";

import OurStoryEvents from "../assets/info/our_story";

const OurStory = props => {
  return (
    <div>
      <VerticalTimeline>
        {OurStoryEvents.map(e => {
          return (
            <VerticalTimelineElement
              date={e.date}
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff"
              }}
              icon={e.icon}
            >
              <p>{e.text}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default OurStory;

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import './MyTimelineStyle.css';

function MyTimeline() {
  return (
    <div style={{ maxHeight: '100vh', overflowY: 'auto' }}>
      <VerticalTimeline>
  <VerticalTimelineElement>
  </VerticalTimelineElement>
  <VerticalTimelineElement>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(80, 80, 80, 0.6)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(80, 80, 80, 0.6)' }}
    date="project date"
    iconStyle={{ background: '#303030', color: '#000' }}
    visible={true}
    /* icon={<WorkIcon />} */
  >
    <h3 className="vertical-timeline-element-title" style={{fontSize: "25px"}}>Project Name</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{fontSize: "20px", color: '#8c8c8c'}}>Subtitle</h4>
    <p>
      project desc
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(80, 80, 80, 0.6)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(80, 80, 80, 0.6)' }}
    date="project date"
    iconStyle={{ background: '#303030', color: '#000' }}
    visible={true}
    /* icon={<WorkIcon />} */
  >
    <h3 className="vertical-timeline-element-title" style={{fontSize: "25px"}}>Project Name</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{fontSize: "20px", color: '#8c8c8c'}}>Subtitle</h4>
    <p>
      project desc
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(80, 80, 80, 0.6)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(80, 80, 80, 0.6)' }}
    date="project date"
    iconStyle={{ background: '#303030', color: '#000' }}
    visible={true}
    /* icon={<WorkIcon />} */
  >
    <h3 className="vertical-timeline-element-title" style={{fontSize: "25px"}}>Project Name</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{fontSize: "20px", color: '#8c8c8c'}}>Subtitle</h4>
    <p>
      project desc
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(80, 80, 80, 0.6)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(80, 80, 80, 0.6)' }}
    date="project date"
    iconStyle={{ background: '#303030', color: '#000' }}
    visible={true}
    /* icon={<WorkIcon />} */
  >
    <h3 className="vertical-timeline-element-title" style={{fontSize: "25px"}}>Project Name</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{fontSize: "20px", color: '#8c8c8c'}}>Subtitle</h4>
    <p>
      project desc
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(80, 80, 80, 0.6)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(80, 80, 80, 0.6)' }}
    date="project date"
    iconStyle={{ background: '#303030', color: '#000' }}
    visible={true}
    /* icon={<WorkIcon />} */
  >
    <h3 className="vertical-timeline-element-title" style={{fontSize: "25px"}}>Project Name</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{fontSize: "20px", color: '#8c8c8c'}}>Subtitle</h4>
    <p>
      project desc
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(80, 80, 80, 0.6)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(80, 80, 80, 0.6)' }}
    date="project date"
    iconStyle={{ background: '#303030', color: '#000' }}
    visible={true}
    /* icon={<WorkIcon />} */
  >
    <h3 className="vertical-timeline-element-title" style={{fontSize: "25px"}}>Project Name</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{fontSize: "20px", color: '#8c8c8c'}}>Subtitle</h4>
    <p>
      project desc
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(80, 80, 80, 0.6)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(80, 80, 80, 0.6)' }}
    date="project date"
    iconStyle={{ background: '#303030', color: '#000' }}
    visible={true}
    /* icon={<WorkIcon />} */
  >
    <h3 className="vertical-timeline-element-title" style={{fontSize: "25px"}}>Project Name</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{fontSize: "20px", color: '#8c8c8c'}}>Subtitle</h4>
    <p>
      project desc
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
    </div>
  );
}

export default MyTimeline;
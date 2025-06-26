import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from 'react-icons/bs';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { data } from "./utils";
import './styles.scss';
import { MdWork } from 'react-icons/md';


const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline" style={{ textAlign: "left" }}>
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text" style={{ textAlign: "left" }}>
            Experience
          </h3>
          <VerticalTimeline
            layout={'1-column'}
            lineColor="var(--blue-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{ background: '#1a1a1a', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #1a1a1a' }}
                date={item.date}

                iconStyle={{ background: '', color: 'var(--blue-theme-sub-text-color)', border: '1.5px solid var(--blue-theme-main-color)' }}
                date={item.date }
                icon={<MdWork />}
                iconStyle={{
                  background: ' #181818',
                  color: 'var(--blue-theme-main-color)'

                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.subTitle}</h4>
                
                </div>
                 <p>{item.description}</p>
              </VerticalTimelineElement>
              
            ))}
          </VerticalTimeline>
        </div>

        <div className="timeline__education" style={{ textAlign: "left" }}>
          <h3 className="timeline__education__header-text" style={{ textAlign: "left" }}>Education</h3>
          <VerticalTimeline
            layout={'1-column'}
            lineColor="var(--blue-theme-main-color)"
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__education__vertical-timeline-element"
                contentStyle={{ background: '#1a1a1a', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #1a1a1a' }}
                date={item.date}
                iconStyle={{ background: '', color: 'var(--blue-theme-sub-text-color)', border: '1.5px solid var(--blue-theme-main-color)' }}
                date={item.date }
                icon={<MdWork />}
                iconStyle={{
                  background: ' #181818',
                  color: 'var(--blue-theme-main-color)'

                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.subTitle}</h4>
               
               </div>
               <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section >
  );
};

export default Resume;

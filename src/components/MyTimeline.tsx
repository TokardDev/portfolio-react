import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Atropos } from 'atropos/react';
import './MyTimelineStyle.css';
import 'atropos/atropos.min.css';

import { IconContext } from "react-icons";
import { TbBrandCSharp } from "react-icons/tb";
import { SiCplusplus } from "react-icons/si";
import { FaPython, FaJava, FaReact, FaSquareJs } from "react-icons/fa6";
import { BiLogoPhp } from "react-icons/bi";
import { SiGodotengine } from "react-icons/si";
import { SiArduino } from "react-icons/si";
import { SiKotlin } from "react-icons/si";

const languageImports ={
  CSharp: <TbBrandCSharp />,
  CPlusPlus: <SiCplusplus />,
  Python: <FaPython />,
  Java: <FaJava />,
  React: <FaReact />,
  JS: <FaSquareJs />,
  PHP: <BiLogoPhp />,
  Godot: <SiGodotengine />,
  Arduino: <SiArduino />, 
  Kotlin: <SiKotlin />,
};

function MyTimeline() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched projects:', data); // Log fetched data
        if (!Array.isArray(data)) {
          throw new Error('Projects data is not an array');
        }
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ maxHeight: '100vh', overflowY: 'auto' }}>
      <VerticalTimeline>
      <VerticalTimelineElement />
      <VerticalTimelineElement />
      <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
        {projects.map((project) => (
          <VerticalTimelineElement
            key={project.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(80, 80, 80, 0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgba(80, 80, 80, 0)' }}
            date={project.date}
            iconStyle={{ background: '#303030', color: '#000' }}
            visible={true}
            icon={languageImports[project.lang]}
          >
            <Atropos shadow={false}>
              <div style={{ background: 'rgba(80, 80, 80, 0.6)', color: '#fff', padding: '20px' }}>
                <h3 className="vertical-timeline-element-title" style={{ fontSize: '25px' }}>{project.title}</h3>
                <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '20px', color: '#8c8c8c' }}>{project.subtitle}</h4>
                <p>{project.description}</p>
              </div>
            </Atropos>
          </VerticalTimelineElement>
        ))}
        </IconContext.Provider>
      </VerticalTimeline>
    </div>
  );
}

export default MyTimeline;

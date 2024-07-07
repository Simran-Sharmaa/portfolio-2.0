import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsFillHandbagFill } from "react-icons/bs";
import { PiGraduationCapBold } from "react-icons/pi";

const WorkIcon = () => <><BsFillHandbagFill />
</>;
function Education() {
  return (
    // <div className="px-40 " style={{background:"#1B2430"}}>
    <div className="px-5 sm:px-10 md:px-40">
        <div className="font-bold text-2xl sm:text-3xl md:text-4xl mb-10 underline decoration-gray-500 underline-offset-2" id="experience">Experience & Education </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#273c58", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #273c58" }}
          date="July 2023 - present"
          iconStyle={{ background: "#273c58", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Web Developer Intern </h3>
          <h4 className="vertical-timeline-element-subtitle">Workabl, Mumbai</h4>
          <p>
            - Development of microservices based Restful API over Node Js on Serverless framework on the backend. <br />
            - Implementation of caching strategies using Redis.Building several features that involved key AWS services. <br />
            - Developed over <span className="font-semibold"> 15 APIs and made 5+ feature changes </span> on the frontend that have been deployed on the production.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        //   className="vertical-timeline-element--work"
        //   date="June 2022 - September 2022"
        //   iconStyle={{ background: "#273c58", color: "black" }}
        //   icon={<WorkIcon />}
        className="vertical-timeline-element--work"
          contentStyle={{ background: "#273c58", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #273c58" }}
          date="June 2022 - September 2022"
          iconStyle={{ background: "#273c58", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Web developer Training</h3>
          <h4 className="vertical-timeline-element-subtitle">
            AllSoft Solution Pvt. Ltd, Mohali
          </h4>
          <p>
           - Learning of the frontend technologies - HTML, CSS, Javascript, React JS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#273c58", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #273c58" }}
          date="July 2020 - May 2024"
          iconStyle={{ background: "#273c58", color: "#fff" }}
          icon={<PiGraduationCapBold/>}
        >
          <h3 className="vertical-timeline-element-title font-bold">Bachelor of Technology </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Maharaja Agrasen University, Baddi
          </h4>
          <p> - Computer Science and Engineering <br /> - CGPA : 9.4</p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<WorkIcon />}
        />*/}
      </VerticalTimeline> 
    </div>
  );
}

export default Education;

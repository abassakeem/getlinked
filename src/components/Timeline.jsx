import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";


import { textVariant } from "../utils/motion";



const ExperienceCard = ({ experience }) => {

  
  
  return (

    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        color: "#fff",
        margin: "",
      }}
      className=""
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='d-flex justify-content-center text-center align-items-center w-full h-full'>
          <p
           
            className='w-[60%] h-[60%] m-3 object-contain'
          >{experience.numba}</p>
        </div>
      }
    >
      <div className="">
        <h3 className='text-white  text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

     
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Hackathon Announcement",
      company_name: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      numba: 1,
      iconBg: "#903aff",
      date: "November 18, 2023",
      
    },
    {
      title: "Teams Registration begins",
      company_name: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
      numba: 2,
      iconBg: "#903aff",
      date: "November 18, 2023",
      
    },
    {
      title: "Teams Registration ends",
      company_name: "Interested Participants are no longer Allowed to register",
      numba: 3,
      iconBg: "#903aff",
      date: "November 18, 2023",
      
    },
    {
      title: "Announcement of the accepted teams and ideas",
      company_name: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
      numba: 4,
      iconBg: "#903aff",
      date: "November 18, 2023",
      
    },
    {
      title: "Getlinked Hackathon 1.0 Offically Begins",
      company_name: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
      numba: 5,
      iconBg: "#903aff",
      date: "November 18, 2023",
      
    },
    {
      title: "Demo Day",
      company_name: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
      numba: 6,
      iconBg: "#903aff",
      date: "November 18, 2023",
      
    },
  ];
  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className="clash text-center">
         Timeline
        </h3>
        <p className='text-center'>
          Here is the breakdown of the time we anticipate <br/>
          using for the upcoming event
        </p>
      </motion.div>
      <div className='mt-5 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
                          />
          ))}
        </VerticalTimeline>
      </div> 
    </>
  )
}

export default Experience
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-8">
        After completing my Bachelors from one of{" "}
        <span className="font-semibold">
          top National Universities in India
        </span>
        , I have always been excited to work on the projects that were assigned
        to me. Seeing things go from the stage of Design to Deployment and
        letting the code do its magic, makes me feel accomplished and encourage
        me to do more. After working as a{" "}
        <span className="font-semibold">
          Software Engineer for more than 4 years
        </span>
        , I decided to follow my passion for software development further by
        pursuing{" "}
        <span className="font-semibold">MSCS at Pace University, New York</span>
        . Over the years of my experience as a Software Engineer, I believe the
        companies I worked with never fell short of nurturing my
        cross-communication/technical skills. Im confident that my nature of
        being accountable for my tasks, ability to learn and adapt well in
        dynamic/fast paced work environments and the thirst to explore new
        technologies make me a good fit in any team that welcomes me. Im easy to
        communicate with, a great team player and would always prefer a team
        setting where I can develop, mentor and learn alongisde my
        colleagues/peers.
        {/* Leetcode(about 150 problems), ability to learn and adapt well at dynamic work environments, Work experience has helped me nurture my cross-communication skills,
        Looking forward to leverage my skills in any place welcoming me. */}
      </p>
      {/* <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p> */}

      <p>
        Im a May 2024 Gradudate, actively looking for full-time
        opportunities in{" "}
        <span className="font-semibold">
          Software Engineer/Frontend/Backend/Full stack Engineer roles.
        </span>
      </p>
      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading novels, cooking and organizing my house.
      </p> */}
    </motion.section>
  );
}

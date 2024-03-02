"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Langs",
    id: "langs",
    content: (
      <ul className="list-disc pl-2">
        <li>Javascript</li>
        <li>Typescript</li>
        <li>Java</li>
        <li>Python</li>
        <li>Dart</li>
      </ul>
    ),
  },
  {
    title: "Mobile Skills",
    id: "mobile",
    content: (
      <ul className="list-disc pl-2">
        <li>React Native</li>
        <li>Flutter</li>
        <li>Android</li>
        <li>IOS</li>
      </ul>
    ),
  },
  {
    title: "Backend Skills",
    id: "backend",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL | PostgreSQL | MongoDB</li>
        <li>Firebase</li>
        <li>APIs Restfull</li>
        <li>Microservices | Servless</li>
        <li>JWT | OAuth</li>
      </ul>
    ),
  },
  {
    title: "Frontend Skills",
    id: "frontend",
    content: (
      <ul className="list-disc pl-2">
        <li>React | Next</li>
        <li>CSS3 | SASS</li>
        <li>Styled-components | Tailwind</li>
        <li>Redux</li>
        <li>CSS Grid | Flexbox</li>
        <li>Jest</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Mobile especialization - Ampli</li>
        <li>Information Systems - Anhanguera</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>React native especialization</li>
        <li>Rest APIS</li>
        <li>Network Architecture</li>
        <li>MVC Architecture</li>
        <li>Node.js With Express especialization</li>
        <li>Biometrics</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Scrum</li>
        <li>SOLID</li>
        <li>Design Patterns</li>
        <li>Clean Architecture | Hexagonal Architecture | MVC | MVVM | MVP</li>
        <li>English - Medium</li>
        <li>Espanish - fluent </li>
        <li>Portuguese(br) - Native</li>
      </ul>
    ),
  },
  {
    title: "Jobs",
    id: "jobs",
    content: (
      <ul className="list-disc pl-2">
        <li>Dz7 Telecom - Fullstack</li>
        <li>Sambatech - Mobile Developer</li>
        <li>Acqio - Mobile Developer</li>
        <li>ApprovaFacil - Mobile Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("langs");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-me.png"
          width={500}
          height={500}
          style={{ borderRadius: 20 }}
          alt="about-me"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Fullstack Developer with a specialization in mobile,
            providing me with a wide range of knowledge for innovative
            solutions. I have experience in various platforms and languages such
            as React Native, Android, iOS, JavaScript, TypeScript, Python, among
            others. I am extremely resilient and focused on delivering quick and
            simple solutions. Additionally, I create content to assist and
            inform programmers and enthusiasts in the field. I have a proven
            track record of success in diverse projects, from corporate
            applications to solutions for startups. Let&apos;s discuss how I can
            contribute to the success of your next project? ☕
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("langs")}
              active={tab === "langs"}
            >
              {" "}
              Langs{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("mobile")}
              active={tab === "mobile"}
            >
              {" "}
              Mobile{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("backend")}
              active={tab === "backend"}
            >
              {" "}
              Backend{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("frontend")}
              active={tab === "frontend"}
            >
              {" "}
              Frontend{" "}
            </TabButton>
            
          </div>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("jobs")}
              active={tab === "jobs"}
            >
              {" "}
              Jobs{" "}
            </TabButton>
            </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

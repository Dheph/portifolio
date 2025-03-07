/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Languages",
    id: "langs",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Java</li>
        <li>Python</li>
        <li>Swift</li>
        <li>Dart</li>
      </ul>
    ),
  },
  {
    title: "Mobile Development",
    id: "mobile",
    content: (
      <ul className="list-disc pl-2">
        <li>React Native</li>
        <li>Android</li>
        <li>iOS</li>
        <li>Flutter</li>
      </ul>
    ),
  },
  {
    title: "Backend Development",
    id: "backend",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL | PostgreSQL | MongoDB</li>
        <li>Firebase</li>
        <li>RESTful APIs</li>
        <li>Microservices | Serverless</li>
        <li>JWT | OAuth</li>
      </ul>
    ),
  },
  {
    title: "Frontend Development",
    id: "frontend",
    content: (
      <ul className="list-disc pl-2">
        <li>React | Next.js</li>
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
        <li>Mobile Development Specialization - Ampli</li>
        <li>Bachelor's in Information Systems - Anhanguera</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>React Native Specialization</li>
        <li>REST APIs</li>
        <li>Network Architecture</li>
        <li>MVC Architecture</li>
        <li>Node.js with Express Specialization</li>
        <li>Biometrics</li>
      </ul>
    ),
  },
  {
    title: "Other Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Scrum</li>
        <li>SOLID Principles</li>
        <li>Design Patterns</li>
        <li>Clean Architecture | Hexagonal Architecture | MVC | MVVM | MVP</li>
        <li>English - Intermediate</li>
        <li>Spanish - Fluent</li>
        <li>Portuguese (BR) - Native</li>
      </ul>
    ),
  },
  {
    title: "Work Experience",
    id: "jobs",
    content: (
      <ul className="list-disc pl-2">
        <li>Dz7 Telecom - Fullstack Developer</li>
        <li>Sambatech - Mobile Developer</li>
        <li>Acqio - Mobile Developer</li>
        <li>ApprovaFácil - Mobile Developer</li>
        <li>BWG - Mobile Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("mobile");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 px-6 sm:py-16 xl:px-20">
        {/* GIF Animado */}
        <div className="flex justify-center">
          <img
            src="https://user-images.githubusercontent.com/51960639/214765238-70e9f520-03a1-44a3-b63e-f076b2513564.gif"
            width={450}
            height={450}
            className="rounded-lg shadow-lg"
            alt="Animated GIF"
          />
        </div>

        {/* Texto do About Me */}
        <div className="text-left">
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg">
            I'm a <strong>Mobile Specialist</strong> with over <strong>6 years of experience</strong> focused on delivering high-quality mobile solutions. My expertise lies in building robust and efficient applications for <strong>iOS</strong> and <strong>Android</strong> using <strong>React Native</strong> and native technologies like <strong>Swift</strong> and <strong>Kotlin</strong>.
          </p>
          <p className="text-lg mt-4">
            I have a deep passion for mobile development and strive to create innovative, fast, and reliable mobile experiences. Throughout my career, I've optimized mobile architectures and implemented solutions that truly make a difference in the user experience.
          </p>
          <p className="text-lg mt-4">
            Let's talk about how my mobile expertise can elevate your next project! ☕
          </p>

          {/* Botões de Navegação */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <TabButton selectTab={() => handleTabChange("langs")} active={tab === "langs"}>
              Languages
            </TabButton>
            <TabButton selectTab={() => handleTabChange("mobile")} active={tab === "mobile"}>
              Mobile
            </TabButton>
            <TabButton selectTab={() => handleTabChange("backend")} active={tab === "backend"}>
              Backend
            </TabButton>
            <TabButton selectTab={() => handleTabChange("frontend")} active={tab === "frontend"}>
              Frontend
            </TabButton>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              Certifications
            </TabButton>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("jobs")} active={tab === "jobs"}>
              Work
            </TabButton>
          </div>

          {/* Conteúdo Dinâmico */}
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

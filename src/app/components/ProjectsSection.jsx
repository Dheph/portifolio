"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "My personal portifólio with React and Next",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dheph/portifolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "App Aprovafacil corretores",
    description:
      "The Approva app is the perfect solution to follow your customer's entire journey in the palm of your hand, wherever and whenever you want. Performing credit analyzes in a few minutes, integrated with our marketplace with more than 40,000 units and exclusive materials to boost your sales. Created with React Native",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    // gitUrl: "/",
    previewUrl:
      "https://play.google.com/store/apps/details?id=com.aprovafacilcorretor",
  },
  {
    id: 3,
    title: "App ApprovaFacil Credito",
    description:
      "The Approva Cred application is the perfect solution to follow your customer's entire journey in the palm of your hand, wherever and whenever you want. Performing credit analyzes in a few minutes, integrated with our marketplace with more than 40,000 units and exclusive materials to boost your sales. Created with React Native",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    // gitUrl: "/",
    previewUrl:
      "https://play.google.com/store/apps/details?id=com.approvafacil.credito",
  },
  {
    id: 4,
    title: "App Minha Dz7",
    description: "Internet connection manager Native app",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    // gitUrl: "/",
    previewUrl:
      "https://play.google.com/store/apps/details?id=br.com.dz7telecom.sistemas",
  },
  {
    id: 5,
    title: "Acqio Franquias",
    description: "franchise manager. Created With React Native",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    // gitUrl: "/",
    previewUrl:
      "https://play.google.com/store/apps/details?id=com.acqio.franchiseeapp",
  },
  {
    id: 6,
    title: "Ima Halu Gamashi",
    description:
      "This is the app of the Institute of Ascension Mysteries, the Mystery School of Halu Gamashi! Now you can more easily access the content acquired at IMA, participate in the lives and watch the videos you download offline!. Created With React Native",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    // gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Personal Blog",
    description: "Personal Blog. Created With React and Next",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dheph/Dheph-Blog",
    previewUrl: "https://blog-dheph.vercel.app/",
  },
  {
    id: 8,
    title: "Acqio Lojistas",
    description:
      "With the Acqio Lojistas application, you have greater convenience to monitor sales made on your machine, view your receivables schedule, simulate a sale, check your rates, request services, in addition to sharing sales receipts with your customers. Created With React Native",
    image: "/images/projects/8.png",
    tag: ["All", "Mobile"],
    // gitUrl: "/",
    previewUrl:
      "https://play.google.com/store/apps/details?id=com.acqio.storeapp",
  },
  {
    id: 9,
    title: "Teomidia",
    description:
      "TEOmídia is a Christian subscription service for movies, series, documentaries, lectures, courses and children's cartoons to watch anytime, anywhere. This TEOmedia app was created with the purpose of helping you to grow, 7 days a week, in the grace and knowledge of our Lord and Savior Jesus Christ. Created With React Native",
    image: "/images/projects/9.png",
    tag: ["All", "Mobile"],
    // gitUrl: "/",
    previewUrl:
      "https://play.google.com/store/apps/details?id=br.com.comev.teomidia",
  },
  {
    id: 10,
    title: "BWG App",
    description:
      "The BWG app provides seamless financial solutions with advanced features, real-time analytics, and secure transactions. Created with React Native.",
    image: "/images/projects/10.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://play.google.com/store/apps/details?id=com.bwg.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

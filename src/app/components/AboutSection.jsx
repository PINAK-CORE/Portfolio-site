"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills boder",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Python</li>
        <li>Flutter</li>
        <li>UI/UX</li>
        <li>DBMS</li>
        <li>Linux , Git , Github</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        
        <li>Marwadi University , Rajkot  </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>100 Days of Code: Python Pro Bootcamp</li>
        <a href="/images/certificats/py1.jpg">
          <li>Programming for Everybody University of Michigan   -<u> Click Me </u></li>
        </a>
        <a href="/images/certificats/py2.jpg">
          <li>Python Data Structures by University of Michigan -<u> Click Me </u></li>
        </a>
        <a href="/images/certificats/dbms.jpg">
          <li>Database Programming with SQL by Oracle -<u> Click Me </u></li>
        </a>
        <a href="/images/certificats/cn1.jpg">
          <li>CCNAv7: Introduction to Networks by Cisco -<u> Click Me </u></li>
        </a>
        <a href="/images/certificats/cn2.jpg">
          <li>CCNAv7: Switching, Routing, and Wireless Essential by Cisco -<u> Click Me </u></li>
        </a>
        <a href="/images/certificats/os.jpg">
          <li>NDG Linux Essentials by Cisco -<u> Click Me </u></li>
        </a>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about1.png" width={300} height={300} />
        <div className="mt-4 md:mt-0 text-left flex flex-col w-full h-full">
          
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I'm <u>Pinak Tilavat</u> and My pronouns are <u>Hire/me</u> , A passionate programmer currently honing my skills at <u>Marwadi University Rajkot</u>. Originally from <u>Junagadh</u>. Proficient in both <u>Java and Python</u>, I'm constantly seeking new challenges and opportunities to expand my knowledge. I'm eager to connect with like-minded individuals and collaborate on innovative projects. Let's build something great together!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton 
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
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
